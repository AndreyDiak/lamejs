// ES Module wrapper for lamejs CommonJS module
// Import the CommonJS module and re-export as ES modules
import * as lamejs from './src/js/index.js';

// Export named exports
export const Mp3Encoder = lamejs.Mp3Encoder;
export const WavHeader = lamejs.WavHeader;

// Export default as an object with both exports
export default {
  Mp3Encoder: lamejs.Mp3Encoder,
  WavHeader: lamejs.WavHeader
};

