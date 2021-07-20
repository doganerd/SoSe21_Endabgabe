namespace Soccer {

    interface Vector {
        x: number;
        y: number;
    }
    let crc2: CanvasRenderingContext2D;

    export class Player extends Movable {

        constructor(velocity: any) {
            super()
            this.velocity = velocity;
            ;
        }
    }
    export function drawTeamA(): void {
        console.log("TeamA");
        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "orange";
        crc2.arc(250, 400, 10, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "orange";
        crc2.arc(400, 600, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "orange";
        crc2.arc(400, 200, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "orange";
        crc2.arc(600, 400, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "orange";
        crc2.arc(600, 100, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "orange";
        crc2.arc(600, 700, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "orange";
        crc2.arc(900, 250, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "orange";
        crc2.arc(900, 550, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "orange";
        crc2.arc(1050, 700, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "orange";
        crc2.arc(1050, 400, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "orange";
        crc2.arc(1050, 100, 10, 0, 2 * Math.PI);
        crc2.stroke();
    }

    export function drawTeamB(): void {
        console.log("TeamB");

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "purple";
        crc2.arc(1250, 400, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "purple";
        crc2.arc(1100, 600, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "purple";
        crc2.arc(1100, 200, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "purple";
        crc2.arc(900, 400, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "purple";
        crc2.arc(900, 100, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "purple";
        crc2.arc(900, 700, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "purple";
        crc2.arc(600, 250, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "purple";
        crc2.arc(600, 550, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "purple";
        crc2.arc(450, 700, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "purple";
        crc2.arc(450, 400, 10, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.strokeStyle = "purple";
        crc2.arc(450, 100, 10, 0, 2 * Math.PI);
        crc2.stroke();
    }

}