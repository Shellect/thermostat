import Circle from "./Circle";
import ProgressBar from "./Progressbar";
import Button from "./Button";

export default class Regulator {
    constructor(config) {
        Object.assign(this, config);
        this.bg = new Circle({
            fillColor: this.fillColor,
            strokeColor: this.strokeColor,
            x: this.x,
            y: this.y,
            r: this.r,
        });
        // this.coolValve = new ProgressBar({
        //     x: this.x,
        //     y: this.y,
        //     r: 5,
        //     color: "blue",
        //     direction: "left"
        // });
        this.heatValve = new ProgressBar({
            x: this.x,
            y: this.y,
            r: 5,
            color: "red",
            direction: "right"
        });
        this.minusBtn = new Button({
            x: 100,
            y: 350,
            r: 30,
            text: "-",
            direction: "left",
            progressBar: this.heatValve,
            ctx: this.ctx,
            regulator: this
        });
        this.plusBtn = new Button({
            x: 300,
            y: 350,
            r: 30,
            text: "+",
            direction: "right",
            progressBar: this.heatValve,
            ctx: this.ctx,
            regulator: this
        });
    }

    draw() {
        this.ctx.rect(0, 0, 600, 600);
        this.ctx.fillStyle = "orange";
        this.ctx.fill();
        this.bg.draw(this.ctx);
        this.heatValve.draw(this.ctx);
        this.minusBtn.draw(this.ctx);
        this.plusBtn.draw(this.ctx);
    }
}