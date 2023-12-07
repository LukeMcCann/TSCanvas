export default class CanvasContextError extends Error {
  constructor(canvasId: string) {
    super(`Failed to get 2D context for canvas with ID "${canvasId}".`);
    this.name = 'CanvasContextError';
  }
}
