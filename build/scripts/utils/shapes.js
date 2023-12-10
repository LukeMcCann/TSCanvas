export const drawLine = (ctx, callback, strokeColor) => {
    ctx.beginPath();
    ctx.strokeStyle = strokeColor ?? 'black';
    callback(ctx);
    ctx.stroke();
};
