// A port of the iOS app's BubbySpriteTint.swift: near-white opaque pixels take the
// fill color, then transparent pixels enclosed by the outline are filled too.
// Tinted frames are cached as data URLs and shared by every sprite on the page.

type Rgb = { red: number; green: number; blue: number };

export function parseHexColor(hex: string): Rgb {
  const value = Number.parseInt(hex.slice(1), 16);
  return { red: (value >> 16) & 0xff, green: (value >> 8) & 0xff, blue: value & 0xff };
}

export function shouldRecolorSpritePixel(red: number, green: number, blue: number, alpha: number): boolean {
  return alpha > 0 && red >= 230 && green >= 230 && blue >= 230;
}

export function recolorPixels(pixels: Uint8ClampedArray, width: number, height: number, fill: Rgb): void {
  for (let index = 0; index < pixels.length; index += 4) {
    if (shouldRecolorSpritePixel(pixels[index], pixels[index + 1], pixels[index + 2], pixels[index + 3])) {
      pixels[index] = fill.red;
      pixels[index + 1] = fill.green;
      pixels[index + 2] = fill.blue;
    }
  }

  const outside = new Uint8Array(width * height);
  const queue: number[] = [];
  const enqueue = (x: number, y: number) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const local = y * width + x;
    if (outside[local] || pixels[local * 4 + 3] !== 0) return;
    outside[local] = 1;
    queue.push(local);
  };

  for (let x = 0; x < width; x += 1) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }
  for (let y = 0; y < height; y += 1) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }
  for (let head = 0; head < queue.length; head += 1) {
    const x = queue[head] % width;
    const y = Math.floor(queue[head] / width);
    enqueue(x + 1, y);
    enqueue(x - 1, y);
    enqueue(x, y + 1);
    enqueue(x, y - 1);
  }

  for (let local = 0; local < width * height; local += 1) {
    const index = local * 4;
    if (pixels[index + 3] === 0 && !outside[local]) {
      pixels[index] = fill.red;
      pixels[index + 1] = fill.green;
      pixels[index + 2] = fill.blue;
      pixels[index + 3] = 255;
    }
  }
}

const tinted = new Map<string, string>();
const pending = new Set<string>();
const listeners = new Set<() => void>();

function cacheKey(src: string, fillHex: string) {
  return `${fillHex}|${src}`;
}

function tintFrame(src: string, fillHex: string) {
  const key = cacheKey(src, fillHex);
  if (tinted.has(key) || pending.has(key)) return;
  pending.add(key);

  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext('2d');
    if (!context) return;

    context.imageSmoothingEnabled = false;
    context.drawImage(image, 0, 0);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    recolorPixels(imageData.data, canvas.width, canvas.height, parseHexColor(fillHex));
    context.putImageData(imageData, 0, 0);

    tinted.set(key, canvas.toDataURL('image/png'));
    pending.delete(key);
    listeners.forEach((listener) => listener());
  };
  image.onerror = () => pending.delete(key);
  image.src = src;
}

export function requestTintedFrames(frames: string[], fillHex: string) {
  frames.forEach((src) => tintFrame(src, fillHex));
}

export function getTintedFrame(src: string, fillHex: string): string | undefined {
  return tinted.get(cacheKey(src, fillHex));
}

export function subscribeToTints(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getTintVersion() {
  return tinted.size;
}
