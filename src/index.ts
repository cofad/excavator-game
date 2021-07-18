function main() {
  updateCanvasSize();
  render();
}

function render() {
  updateCanvasSize();
  drawRectangle();
  requestAnimationFrame(render);
}

function drawRectangle() {
  const canvas: HTMLCanvasElement = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.rect(10, 10, 20, 20);
  ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
  ctx.stroke();
  ctx.closePath();
}

function updateCanvasSize() {
  const canvas: HTMLCanvasElement = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

main();
