import { createContext, useContext } from 'react';
import { DEFAULT_BUBBY_COLOR, type BubbyColorId } from '../data/bubbyColors';

// The color picked in "make bubby yours" recolors every Bubby on the page.
export const BubbyColorContext = createContext<{
  colorId: BubbyColorId;
  setColorId: (colorId: BubbyColorId) => void;
}>({
  colorId: DEFAULT_BUBBY_COLOR,
  setColorId: () => {},
});

export function useBubbyColor() {
  return useContext(BubbyColorContext);
}
