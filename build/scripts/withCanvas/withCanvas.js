import CanvasContextError from "../errors/canvasContextError.js";
import CanvasElementNotFoundError from "../errors/canvasNotFoundError.js";
const withCanvas = ({ canvasId, callback }) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        throw new CanvasElementNotFoundError(canvasId);
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new CanvasContextError(canvasId);
    }
    callback(ctx);
};
export default withCanvas;
