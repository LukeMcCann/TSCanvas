import { drawLine } from "../scripts/utils/shapes.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../scripts/global/values.js";
import { randomHexColor } from "../scripts/utils/colorizer.js";
class Line {
    startX;
    startY;
    endX;
    endY;
    lineWidth;
    canvas;
    constructor(canvas) {
        this.startX = Math.random() * CANVAS_WIDTH;
        this.startY = Math.random() * CANVAS_HEIGHT;
        this.endX = Math.random() * CANVAS_WIDTH;
        this.endY = Math.random() * CANVAS_HEIGHT;
        this.canvas = canvas;
        this.lineWidth = Math.floor((Math.random() * 15 + 1));
    }
    draw() {
        drawLine(this.canvas.ctx, (ctx) => {
            ctx.strokeStyle = randomHexColor();
            ctx.lineWidth = this.lineWidth;
            ctx.moveTo(this.startX, this.startY);
            ctx.lineTo(this.endX, this.endY);
        });
    }
}
export default Line;
