import CanvasContextError from "../errors/canvasContextError.js";
import CanvasElementNotFoundError from "../errors/canvasNotFoundError.js";
const withCanvas = ({ canvasId, draw, options }) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        throw new CanvasElementNotFoundError(canvasId);
    }
    const ctx = canvas.getContext('2d');
    canvas.width = options?.width ?? 700;
    canvas.height = options?.height ?? 900;
    if (!ctx) {
        throw new CanvasContextError(canvasId);
    }
    ctx.lineWidth = options?.lineWidth ?? 10;
    draw(ctx);
};
export default withCanvas;
