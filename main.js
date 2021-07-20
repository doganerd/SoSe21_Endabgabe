"use strict";
var Soccer;
(function (Soccer) {
    window.addEventListener("load", handleload);
    let crc2;
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawCircle();
        drawSquare();
        drawLeft();
        drawRight();
        drawGoalLeft();
        drawGoalRight();
        drawMiddleLine();
        drawPlayer();
        function drawBackground() {
            console.log("Background");
            let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(1, "green");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
        function drawCircle() {
            console.log("Circle");
            var c = document.getElementById("mycanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "white";
            ctx.arc(750, 400, 80, 0, 2 * Math.PI);
            ctx.stroke();
        }
        function drawSquare() {
            console.log("Square");
            var c = document.getElementById("mycanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.rect(150, 50, 1200, 700);
            ctx.stroke();
        }
        function drawLeft() {
            console.log("LeftSquare");
            var c = document.getElementById("mycanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.rect(150, 200, 200, 400);
            ctx.stroke();
        }
        function drawRight() {
            console.log("RightSquare");
            var c = document.getElementById("mycanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.rect(1150, 200, 200, 400);
            ctx.stroke();
        }
        function drawGoalLeft() {
            console.log("LeftGoal");
            var c = document.getElementById("mycanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.rect(150, 350, 50, 100);
            ctx.stroke();
        }
        function drawGoalRight() {
            console.log("RightGoal");
            var c = document.getElementById("mycanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.rect(1300, 350, 50, 100);
            ctx.stroke();
        }
        function drawMiddleLine() {
            console.log("MiddleLine");
            var c = document.getElementById("mycanvas");
            var ctx = c.getContext("2d");
            ctx.moveTo(750, 50);
            ctx.lineTo(750, 750);
            ctx.stroke();
        }
        function drawPlayer() {
            console.log("Player");
            var c = document.getElementById("mycanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.lineWidth = "10";
            ctx.strokeStyle = "pink";
            ctx.arc(250, 400, 10, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
})(Soccer || (Soccer = {}));
//# sourceMappingURL=main.js.map