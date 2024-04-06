import Circle from "./Circle";

export default class Button {
    constructor(config) {
        Object.assign(this, config)
        this.bg = new Circle({
            fillColor: "rgba(255, 255, 255, 0.5)",
            strokeColor: "white",
            x: this.x,
            y: this.y,
            r: this.r,
        });
        this.handleClick(this.regulator);
    }

    draw(ctx) {
        this.bg.draw(ctx);
        ctx.fillStyle = "#000";
        ctx.font = "30px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.text, this.x, this.y)
    }

    handleClick(regulator) {
        let {collisionDetect, progressBar, direction, ctx} = this;
        collisionDetect = collisionDetect.bind(this);
        document.addEventListener('click', function (event) {
            if (collisionDetect(event.pageX, event.pageY)) {
                progressBar.move(ctx, direction);
                regulator.draw();
            }
        })
    }

    collisionDetect(x, y) {
        const dx = this.x - x;
        const dy = this.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
      
        return distance < this.r;
    }


}