"use strict";
var soccer;
(function (soccer) {
    class Ball extends soccer.Moveable {
        constructor(velocity) {
            super();
            this.velocity = velocity;
            ;
        }
    }
    soccer.Ball = Ball;
    var ball = document.querySelector("#ball");
    var mycanvas = document.querySelector("mycanvas");
    mycanvas?.addEventListener("click", getClickedPosition, false);
    function getClickedPosition(e) {
        var xPos = e.clientX;
        var yPos = e.clientY;
        var translate3dValue = "translate3d(" + xPos + "px," + yPos + "px, 0)";
        ball.style.transform = translate3dValue;
    }
})(soccer || (soccer = {}));
//# sourceMappingURL=ball.js.map