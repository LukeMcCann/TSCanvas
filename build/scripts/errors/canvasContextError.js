export default class CanvasContextError extends Error {
    constructor(canvasId) {
        super(`Failed to get 2D context for canvas with ID "${canvasId}".`);
        this.name = 'CanvasContextError';
    }
}
