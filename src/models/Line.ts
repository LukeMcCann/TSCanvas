import { drawLine } from "../scripts/utils/shapes.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../scripts/global/values.js";

class Line {
  startX: number;
  startY: number;

  endX: number;
  endY: number;

  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.startX = Math.random() * CANVAS_WIDTH;
    this.startY = Math.random() * CANVAS_HEIGHT;
    this.endX = Math.random() * CANVAS_WIDTH;
    this.endY = Math.random() * CANVAS_HEIGHT;
    this.ctx = ctx;
  }

  draw() {
    drawLine(this.ctx, (ctx) => {
      ctx.moveTo(this.startX, this.startY);
      ctx.lineTo(this.endX, this.endY);
    });
  }
}

export default Line;
