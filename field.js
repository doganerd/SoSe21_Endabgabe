"use strict";
var Soccer;
(function (Soccer) {
    function drawBackground() {
        console.log("Background");
        let gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
        gradient.addColorStop(1, "green");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    Soccer.drawBackground = drawBackground;
    function drawCircle() {
        console.log("Circle");
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "white";
        ctx.arc(750, 400, 80, 0, 2 * Math.PI);
        ctx.stroke();
    }
    Soccer.drawCircle = drawCircle;
    function drawSquare() {
        console.log("Square");
        ctx.beginPath();
        ctx.rect(150, 50, 1200, 700);
        ctx.stroke();
    }
    Soccer.drawSquare = drawSquare;
    function drawLeft() {
        console.log("LeftSquare");
        ctx.beginPath();
        ctx.rect(150, 200, 200, 400);
        ctx.stroke();
    }
    Soccer.drawLeft = drawLeft;
    function drawRight() {
        console.log("RightSquare");
        ctx.beginPath();
        ctx.rect(1150, 200, 200, 400);
        ctx.stroke();
    }
    Soccer.drawRight = drawRight;
    function drawGoalLeft() {
        console.log("LeftGoal");
        ctx.beginPath();
        ctx.rect(150, 350, 50, 100);
        ctx.stroke();
    }
    Soccer.drawGoalLeft = drawGoalLeft;
    function drawGoalRight() {
        console.log("RightGoal");
        ctx.beginPath();
        ctx.rect(1300, 350, 50, 100);
        ctx.stroke();
    }
    Soccer.drawGoalRight = drawGoalRight;
    function drawMiddleLine() {
        console.log("MiddleLine");
        ctx.moveTo(750, 50);
        ctx.lineTo(750, 750);
        ctx.stroke();
    }
    Soccer.drawMiddleLine = drawMiddleLine;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=field.js.map