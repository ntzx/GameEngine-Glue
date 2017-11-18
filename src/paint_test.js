const tc = require("./test_config.js");
const core = require("./core.js");
const paint = require("./paint.js");

let game = new core.Game();
game.load_config(tc);

let board = null;

window.addEventListener("load", () => {
    board = new paint.Board(game, document.getElementById("game-board"));
    board.draw();
});
