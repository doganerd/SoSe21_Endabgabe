namespace soccer {
    export class Moveable {
        position: Vector;
        velocity: Vector;
        posiX: number;
        posiY: number;

        constructor() {
            let x: number = ctx.canvas.width * Math.random();
            let y: number = ctx.canvas.height * Math.random();

            this.position = new Vector(x, y);


        }
        move(): void {

            this.position.add(this.velocity);
            if (this.position.x > ctx.canvas.width) {
                this.position.x -= ctx.canvas.width;
                this.position.y = ctx.canvas.height * Math.random() ;

            }
            if (this.position.y > ctx.canvas.height) {
                this.position.y -= ctx.canvas.height;
                this.position.x = ctx.canvas.width * Math.random();

            }

        }
        getClick(_positionX: number, _positionY: number): void {
            this.posiX = _positionX;
            this.posiY = _positionY;

        }

    }
} 