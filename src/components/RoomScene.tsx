import { rooms, type RoomId } from '../data/bubbyContent';
import type { BubbyAnimation } from '../data/bubbySprites';
import { BubbySprite } from './BubbySprite';
import { SpeechBubble } from './PixelArt';

type RoomSceneProps = {
  room: RoomId;
  animation: BubbyAnimation;
  bubbyAlt?: string;
  says?: string;
  eager?: boolean;
  className?: string;
};

// Bubby stands centered near the floor, about 22% of the room's width, the way
// SceneView places the sprite in the app.
export function RoomScene({ room, animation, bubbyAlt = '', says, eager = false, className = '' }: RoomSceneProps) {
  const scene = rooms[room];

  return (
    <div className={`room-scene ${className}`.trim()}>
      <img
        className="room-scene__art"
        src={scene.src}
        alt={scene.alt}
        width="1400"
        height="628"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
      <div className="room-scene__bubby">
        <BubbySprite animation={animation} alt={bubbyAlt} />
      </div>
      {says ? (
        <SpeechBubble className="room-scene__speech" live>
          {says}
        </SpeechBubble>
      ) : null}
    </div>
  );
}
