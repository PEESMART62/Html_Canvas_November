//Ball Variables
const ball = document.querySelector("#myCanvas1");
const ctx = ball.getContext("2d");


//Ball Properties
let y = 50;
let x= 40;
let speed = 5;
let xSpeed = 5;

// Clear Canvas and Draw a Ball
    function drawBall() {
        ctx.clearRect(0, 0, ball.width, ball.height);
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, 2 * Math.PI);
        
        ctx.fill();

//Create Animation
    requestAnimationFrame(drawBall);        
        y += speed
        x += xSpeed
            if (y + 40 >= ball.height) {
            speed = -speed;
            ctx.fillStyle = "green";
            }
            if (y <= 40) {
            speed = -speed;
            ctx.fillStyle = "blue";
            }
            if (x + 40 >= ball.width) {
                xSpeed = -xSpeed;
                ctx.fillStyle = "violet";
            }
            if (x <= 40) {
                xSpeed = -xSpeed;
                ctx.fillStyle = "yellow";
            }
}
drawBall();




//House Variables
const house = document.querySelector("#myCanvas");
const ctx1 = house.getContext("2d");

//Name of the building
 ctx1.font = "20px Calibri bold";
 ctx1.fillStyle = "green";
 ctx1.fillText("ASO ROCK", 145, 280);
 ctx1.font = "20px Calibri bold";
 ctx1.fillStyle = "green";
 ctx1.fillText("THE PRESIDENTIAL VILLA", 70, 50);


// Body of the house 
ctx1.fillStyle = "green"; 
ctx1.fillRect(100, 150, 200, 100);



// Roof of the building 
ctx1.beginPath();
ctx1.lineTo(80, 150);
ctx1.lineTo(200, 60);
ctx1.lineTo(320, 150);
ctx1.fillStyle = "white";
ctx1.fill();




// Door
ctx1.fillStyle = "white"; 
ctx1.fillRect(170, 190, 60, 60);



// Window
ctx1.beginPath();
ctx1.arc(140, 185, 20, 0, 2 * Math.PI); // x, y, radius
ctx1.fillStyle = "white"; // light blue
ctx1.arc(260, 185, 20, 0, 2 * Math.PI);
ctx1.fill();
