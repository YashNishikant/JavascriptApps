var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = canvas.width/2;
var y = canvas.height-60;
var step = 1;
var ballRadius = 10;


function drawBall() {
   
    ctx.beginPath();
    ctx.arc(x, y, ballRadius ,0 , 2*Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
}
    
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    //step = step + 0.5
    x = x- step
    y = y- step
      
}
setInterval(draw, 10);