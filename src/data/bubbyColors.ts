// Same ten fills as the app's BubbyColorOption.allOptions ("clear" is the app's "default").
export const bubbyColors = [
  { id: 'clear', name: 'clear', fillHex: null, swatch: '#ffffff' },
  { id: 'pink', name: 'pink', fillHex: '#f8bfd6', swatch: '#f8bfd6' },
  { id: 'lavender', name: 'lavender', fillHex: '#d7c5ff', swatch: '#d7c5ff' },
  { id: 'mint', name: 'mint', fillHex: '#bdf5cf', swatch: '#bdf5cf' },
  { id: 'baby_blue', name: 'baby blue', fillHex: '#bfe4ff', swatch: '#bfe4ff' },
  { id: 'peach', name: 'peach', fillHex: '#ffd0b8', swatch: '#ffd0b8' },
  { id: 'yellow', name: 'yellow', fillHex: '#fff2a8', swatch: '#fff2a8' },
  { id: 'cream', name: 'cream', fillHex: '#fff5dd', swatch: '#fff5dd' },
  { id: 'aqua', name: 'aqua', fillHex: '#aeeeed', swatch: '#aeeeed' },
  { id: 'berry', name: 'berry', fillHex: '#ef9fc5', swatch: '#ef9fc5' },
] as const;

export type BubbyColorId = (typeof bubbyColors)[number]['id'];

export const DEFAULT_BUBBY_COLOR: BubbyColorId = 'clear';

export function getBubbyColor(id: BubbyColorId) {
  return bubbyColors.find((color) => color.id === id) ?? bubbyColors[0];
}
