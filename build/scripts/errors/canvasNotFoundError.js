export default class CanvasElementNotFoundError extends Error {
    constructor(canvasId) {
        super(`Canvas element with id "${canvasId}" not found.`);
        this.name = 'CanvasElementNotFoundError';
    }
}
