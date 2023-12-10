import CanvasContextError from "../errors/canvasContextError.js";
import CanvasElementNotFoundError from "../errors/canvasNotFoundError.js";

type CanvasCallback = (ctx: CanvasRenderingContext2D) => void;

interface CanvasOptions {
  width: number;
  height: number;
  lineWidth?: number;
}

interface Canvas {
  canvasId: string;
  draw: CanvasCallback;
  options?: CanvasOptions;
}

const withCanvas = ({ canvasId, draw, options }: Canvas): void => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;

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
}

export default withCanvas;
