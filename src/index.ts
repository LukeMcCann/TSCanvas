import withCanvas from "./scripts/withCanvas/withCanvas.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./scripts/global/values.js";
import Line from "./models/Line.js";

const options = {
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
}

const lines: Line[] = [];
const numberOfLines = 50;

const draw = (ctx: CanvasRenderingContext2D) => {
  for (let i = 0; i < numberOfLines; i++) {
    lines.push(new Line({ ctx, width: options.width, height: options.height }));
  }

  lines.forEach(line => line.draw());
}

withCanvas({
  canvasId: 'canvas',
  draw,
  options,
});
