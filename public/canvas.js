function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {
  // Draw triangle
  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(150, 14);
  ctx.lineTo(200, 100);
  ctx.lineTo(100, 100);
  ctx.stroke();
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(275, 57, 50, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(400, 57, 50, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(525, 57, 50, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.closePath();

}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.strokeStyle = 'rgba(0, 0, 0, 1)';

  ctx.save();
  //ctx.translate(450, 250);
  drawArt(ctx);
  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}

initializeAnimation();
