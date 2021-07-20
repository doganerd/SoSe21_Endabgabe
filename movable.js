"use strict";
var soccer;
(function (soccer) {
    class Moveable {
        constructor() {
            let x = ctx.canvas.width * Math.random();
            let y = ctx.canvas.height * Math.random();
            this.position = new Vector(x, y);
        }
        move() {
            this.position.add(this.velocity);
            if (this.position.x > ctx.canvas.width) {
                this.position.x -= ctx.canvas.width;
                this.position.y = ctx.canvas.height * Math.random();
            }
            if (this.position.y > ctx.canvas.height) {
                this.position.y -= ctx.canvas.height;
                this.position.x = ctx.canvas.width * Math.random();
            }
        }
        getClick(_positionX, _positionY) {
            this.posiX = _positionX;
            this.posiY = _positionY;
        }
    }
    soccer.Moveable = Moveable;
})(soccer || (soccer = {}));
//# sourceMappingURL=movable.js.map