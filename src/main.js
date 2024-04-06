import Regulator from "./Regulator";

let canvas = document.querySelector("#c");
let ctx = canvas.getContext("2d");

let regulator = new Regulator({
    ctx: ctx,
    x: 200,
    y: 150,
    r: 100,
    fillColor: "white",
    strokeColor: "rgb(252, 186, 3)"
});

regulator.draw();
