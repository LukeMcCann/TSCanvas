import { drawLine } from "../scripts/utils/shapes.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../scripts/global/values.js";
import { randomHexColor } from "../scripts/utils/colorizer.js";

interface Coorindates {
  x: number;
  y: number;
}

interface Canvas {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
}

class Line {
  x: number;
  y: number;

  lineWidth: number;
  history: Coorindates[];

  canvas: Canvas;

  constructor(canvas: Canvas) {
    this.x = Math.random() * CANVAS_WIDTH;
    this.y = Math.random() * CANVAS_HEIGHT;
    this.history = [{ x: this.x, y: this.y}];
    this.canvas = canvas;
    this.lineWidth = Math.floor((Math.random() * 15 + 1));
  }

  draw() {
    drawLine(this.canvas.ctx, (ctx) => {
      ctx.strokeStyle = randomHexColor();
      ctx.lineWidth = this.lineWidth;
      ctx.moveTo(this.history[0].x, this.history[0].y);
      for (let i = 0; i < 3; i++) {
        this.x = Math.random() * CANVAS_WIDTH;
        this.y = Math.random() * CANVAS_HEIGHT;
        this.history.push({ x: this.x, y: this.y });
      }
      for (let i = 0; i < this.history.length; i++) {
        ctx.lineTo(this.history[i].x, this.history[i].y);
      }
    });
  }
}

export default Line;
