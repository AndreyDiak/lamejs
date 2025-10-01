// ES Module wrapper for lamejs CommonJS module
// This will be handled by Vite's CommonJS transformation

// Re-export the CommonJS module as ES modules
export { default, Mp3Encoder, WavHeader } from './src/js/index.js';

