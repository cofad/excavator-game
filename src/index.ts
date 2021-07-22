function main() {
  updateCanvasSize();
  render();
}

function render() {
  updateCanvasSize();
  drawImage();
  requestAnimationFrame(render);
}

function drawImage() {
  const canvas: HTMLCanvasElement = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  const img = document.getElementById("image") as HTMLImageElement;
  ctx.drawImage(img, 0, 0);
}

function updateCanvasSize() {
  const canvas: HTMLCanvasElement = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

main();
