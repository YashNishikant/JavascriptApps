var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = canvas.width/2;
var y = canvas.height-60;
var stepX = 1;
var stepY = 1;
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
    
    if (x<11)
    {
        stepX = -1 * stepX;
    }
    
    if (y<11)
    {
        stepY = -1 * stepY;    
    }
    
    if (x>canvas.width - ballRadius)
    {
        stepX = -1 * stepX;    
    }
    
    if (y>canvas.height - ballRadius)
    {
        stepY = -1 * stepY;    
    }
    
    x = x- stepX
    y = y- stepY

}
setInterval(draw, 10);