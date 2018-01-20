var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = 250;
var y = 150;

ctx.fillStyle = 'red';
ctx.fillRect(50, 200, 80, 80);
ctx.stroke();

ctx.fillStyle = 'blue';
ctx.fillRect(70, 10, 80, 30);
ctx.stroke();

function draw() {
    ctx.clearRect(300, 300, canvas.width, canvas.height);
    x=x+1;
    y=y+1;
    ctx.beginPath();
    ctx.arc(x, y ,50 ,0 ,2*Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
}
setInterval(draw, 100);