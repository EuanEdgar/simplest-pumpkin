(() => {
  const c = document.querySelector('canvas');
  const ctx = c.getContext('2d');

  ctx.fillStyle = '#6b4000';
  ctx.beginPath();
  ctx.moveTo(65, 30);
  ctx.lineTo(70, 15);
  ctx.lineTo(80, 15);
  ctx.lineTo(85, 30);
  ctx.fill();

  ctx.fillStyle = '#ff8c00';
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.fillStyle = '#000000';
  ctx.font = "30px Arial";
  ctx.fillText(":)", 65, 80);
})()
