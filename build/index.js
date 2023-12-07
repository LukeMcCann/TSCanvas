import withCanvas from "./scripts/withCanvas/withCanvas.js";
withCanvas({
    canvasId: 'canvas1',
    callback: (ctx) => {
        ctx.fillStyle = 'blue';
        ctx.fillRect(10, 10, 50, 50);
    }
});
