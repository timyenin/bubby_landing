import { useState } from 'react';
import { bubbyColors, getBubbyColor } from '../data/bubbyColors';
import { themes, type ThemeId } from '../data/bubbyContent';
import { useBubbyColor } from '../lib/bubbyColorContext';
import { PixelNote } from './PixelArt';
import { RoomScene } from './RoomScene';

export function MakeItYours() {
  const { colorId, setColorId } = useBubbyColor();
  const [themeId, setThemeId] = useState<ThemeId>('light_pink');
  const theme = themes.find((item) => item.id === themeId) ?? themes[0];
  const colorName = getBubbyColor(colorId).name;

  return (
    <section
      className={`section-band make-section make-section--${themeId}`}
      id="make-it-yours"
      aria-labelledby="make-title"
    >
      <div className="page-width make-grid">
        <RoomScene
          room={theme.room}
          animation="idle"
          bubbyAlt={`${colorName} bubby in the ${theme.name} theme`}
          className="make-scene"
        />

        <div className="make-controls">
          <h2 id="make-title">make bubby yours</h2>

          <fieldset className="picker">
            <legend>
              10 colors <span aria-hidden="true">·</span> <span className="picker__current">{colorName}</span>
            </legend>
            <div className="swatches">
              {bubbyColors.map((color) => (
                <button
                  className="swatch"
                  type="button"
                  key={color.id}
                  style={{ backgroundColor: color.swatch }}
                  onClick={() => setColorId(color.id)}
                  aria-pressed={colorId === color.id}
                  aria-label={color.name}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="picker">
            <legend>2 cozy themes</legend>
            <div className="theme-buttons">
              {themes.map((item) => (
                <button
                  className={`theme-button theme-button--${item.id}`}
                  type="button"
                  key={item.id}
                  onClick={() => setThemeId(item.id)}
                  aria-pressed={themeId === item.id}
                >
                  <span className="theme-button__dot" aria-hidden="true" />
                  {item.name}
                </button>
              ))}
            </div>
          </fieldset>

          <p className="make-music">
            <PixelNote />
            plus 8-bit music, if you want it
          </p>
          <p className="make-note">pick a color and every bubby on this page follows along.</p>
        </div>
      </div>
    </section>
  );
}
