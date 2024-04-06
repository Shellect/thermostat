import Circle from "./Circle";

export default class ProgressBar {
    constructor(config) {
        Object.assign(this, config);
        this.progress = 0;
    }

    draw(ctx) {
        let x = this.x + Math.cos(this.progress * Math.PI / 180) * 110;
        let y = this.y + Math.sin(this.progress * Math.PI / 180) * 110;
        let bg = new Circle({
            strokeColor: "white",
            fillColor: this.color,
            x: x,
            y: y,
            r: this.r,
        });
        bg.draw(ctx);
    }

    move(ctx, direction) {
        if (direction == this.direction) {
            this.progress = Math.min(this.progress + 36, 360);
        } else {
            this.progress = Math.max(this.progress - 36, 0);
        }
    }
}