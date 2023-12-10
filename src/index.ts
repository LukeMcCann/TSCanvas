import withCanvas from "./scripts/withCanvas/withCanvas.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./scripts/global/values.js";
import Line from "./models/Line.js";

const options = {
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
}

const draw = (ctx: CanvasRenderingContext2D) => {
  const lineA = new Line(ctx);

  lineA.draw();
}

withCanvas({
  canvasId: 'canvas',
  draw,
  options,
});
