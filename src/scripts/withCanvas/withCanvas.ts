import CanvasContextError from "../errors/canvasContextError.js";
import CanvasElementNotFoundError from "../errors/canvasNotFoundError.js";

type CanvasCallback = (ctx: CanvasRenderingContext2D) => void;

interface GetCanvasContextProps {
  canvasId: string;
  callback: CanvasCallback;
}

const withCanvas = ({ canvasId, callback }: GetCanvasContextProps): void => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;

  if (!canvas) {
    throw new CanvasElementNotFoundError(canvasId);
  }

  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new CanvasContextError(canvasId);
  }

  callback(ctx);
}

export default withCanvas;
