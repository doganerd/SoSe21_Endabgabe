namespace soccer {

    interface Vector {
        x: number;
        y: number;
    }
    export class Ball extends Moveable {

        constructor(velocity: any) {
            super()
            this.velocity = velocity;
            ;
        }
    }


    var ball = document.querySelector("#ball");
    var mycanvas = document.querySelector("mycanvas");

    mycanvas?.addEventListener("click", getClickedPosition, false);

    function getClickedPosition(e: any) {
        var xPos = e.clientX;
        var yPos = e.clientY;

        var translate3dValue = "translate3d(" + xPos + "px," + yPos + "px, 0)";

        ball.style.transform = translate3dValue;
    }

}