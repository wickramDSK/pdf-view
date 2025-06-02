export const themes = {
  default: {
    background: '#ffffff',
    text: '#000000',
    containerBg: '#c5c5df',
    pageFilter: 'none',
  },
  dark: {
    background: '#1a1a1a',
    text: '#ffffff',
    containerBg: '#c5c5df',
    pageFilter: 'invert(1) hue-rotate(180deg)',
  },
  sepia: {
    background: '#f4ecd8',
    text: '#5b4636',
    containerBg: '#c5c5df',
    pageFilter: 'sepia(0.8) brightness(0.95)',
  },
  darkContrast: {
    background: '#000000',
    text: '#ffffff',
    containerBg: '#c5c5df',
    pageFilter: 'invert(1) contrast(1.2) brightness(1.1)',
  },
  night: {
    background: '#0f172a',
    text: '#94a3b8',
    containerBg: '#c5c5df',
    pageFilter: 'brightness(0.8) invert(0.9) hue-rotate(180deg)',
  },
  mint: {
    background: '#f1f8f5',
    text: '#2d3f36',
    containerBg: '#c5c5df',
    pageFilter: 'hue-rotate(45deg) brightness(1.05)',
  },
};