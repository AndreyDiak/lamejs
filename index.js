// ES Module wrapper for lamejs CommonJS module
// Import the CommonJS module as a namespace to avoid require issues
import * as lamejsModule from './src/js/index.js';

// Export the classes directly
export const Mp3Encoder = lamejsModule.Mp3Encoder;
export const WavHeader = lamejsModule.WavHeader;

// Export default for compatibility
export default {
  Mp3Encoder: lamejsModule.Mp3Encoder,
  WavHeader: lamejsModule.WavHeader
};

