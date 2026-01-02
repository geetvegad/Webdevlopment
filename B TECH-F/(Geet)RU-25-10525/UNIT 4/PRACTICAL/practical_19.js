const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Rectangle
ctx.fillStyle = "#6c5ce7";
ctx.fillRect(20, 20, 100, 60);

// Circle
ctx.beginPath();
ctx.arc(200, 60, 30, 0, Math.PI * 2);
ctx.fillStyle = "#00b894";
ctx.fill();

// Line
ctx.beginPath();
ctx.moveTo(20, 130);
ctx.lineTo(330, 130);
ctx.strokeStyle = "#d63031";
ctx.lineWidth = 3;
ctx.stroke();

// Triangle
ctx.beginPath();
ctx.moveTo(180, 200);
ctx.lineTo(230, 160);
ctx.lineTo(280, 200);
ctx.closePath();
ctx.fillStyle = "#fdcb6e";
ctx.fill();
