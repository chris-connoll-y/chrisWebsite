function initializeAnimation() {
  window.requestAnimationFrame(draw);
}
var totalX = 0;
var totaldX = 1;
var y = 107;
var dy = 1;
function drawArt(ctx) {
  // Draw triangle
  ctx.beginPath();
  ctx.moveTo(totalX+100,150);
  ctx.lineTo(totalX+150, 64);
  ctx.lineTo(totalX+200, 150);
  ctx.lineTo(totalX+100, 150);
  ctx.stroke();
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(totalX+275, 107, 50, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(totalX+400, 107, 50, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.closePath();
  ctx.fill();


  ctx.beginPath();
  ctx.arc(totalX+525, y, 50, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.closePath();
  y+=dy;
  if(y>=157)
  {
    dy = -1;
  }
  else if(y<=57)
  {
    dy = 1;
  }
  totalX+=totaldX;
  if(totalX>=100)
  {
    totaldX = -1;
  }
  else if(totalX<=0)
  {
    totaldX = 1;
  }

}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.strokeStyle = 'rgba(0, 0, 0, 1)';

  ctx.save();
  drawArt(ctx);

  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}
initializeAnimation();
setInterval(draw(),10);
