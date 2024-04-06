export default class Circle {
    constructor(config) {
        Object.assign(this, config)
    }

    circle(ctx, x, y, r, color) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

    draw(ctx) {
        this.circle(ctx, this.x, this.y, this.r + Math.ceil(this.r / 10), this.strokeColor);
        this.circle(ctx, this.x, this.y, this.r, this.fillColor);
    }
}