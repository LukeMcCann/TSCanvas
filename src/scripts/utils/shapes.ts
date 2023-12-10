export const drawLine = (
  ctx: CanvasRenderingContext2D,
  callback: (ctx: CanvasRenderingContext2D) => void,
  strokeColor?: string
) => {
  ctx.beginPath();
  ctx.strokeStyle = strokeColor ?? 'black';
  callback(ctx);
  ctx.stroke();
}
