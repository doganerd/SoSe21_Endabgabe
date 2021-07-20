namespace Soccer {

    export function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
        gradient.addColorStop(1, "green");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    export function drawCircle(): void {
        console.log("Circle");


        ctx.beginPath();
        ctx.lineWidth =   4;
        ctx.strokeStyle = "white";
        ctx.arc(750, 400, 80, 0, 2 * Math.PI);
        ctx.stroke();
    }

    export function drawSquare(): void {
        console.log("Square");


        ctx.beginPath();
        ctx.rect(150, 50, 1200, 700);
        ctx.stroke();
    }

    export function drawLeft(): void {
        console.log("LeftSquare");


        ctx.beginPath();
        ctx.rect(150, 200, 200, 400);
        ctx.stroke();
    }

    export function drawRight(): void {
        console.log("RightSquare");


        ctx.beginPath();
        ctx.rect(1150, 200, 200, 400);
        ctx.stroke();
    }

    export function drawGoalLeft(): void {
        console.log("LeftGoal");


        ctx.beginPath();
        ctx.rect(150, 350, 50, 100);
        ctx.stroke();
    }

    export function drawGoalRight(): void {
        console.log("RightGoal");


        ctx.beginPath();
        ctx.rect(1300, 350, 50, 100);
        ctx.stroke();
    }

    export function drawMiddleLine(): void {
        console.log("MiddleLine");


        ctx.moveTo(750, 50);
        ctx.lineTo(750, 750);
        ctx.stroke();
    }
}