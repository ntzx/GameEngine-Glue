const tc = require("./test_config.js");
const core = require("./core.js");
const paint = require("./paint.js");

let game = new core.Game();
game.load_config(tc);

let board = null;

window.build_board_from_code = function() {
    let code_input = document.getElementById("code-input");
    let code;
    try {
        code = JSON.parse(code_input.value);
    } catch(e) {
        alert("JSON 描述文件解析失败。");
        return;
    }
    try {
        game.load_config(code);
    } catch(e) {
        alert("执行系统拒绝了你提供的描述文件，错误信息可在控制台查看。请刷新页面再试。");
        code_input.disabled = true;
        document.getElementById("build-board-btn").disabled = true;
        return;
    }

    code_input.disabled = true;
    code_input.style.display = "none";

    let game_board = document.getElementById("game-board");
    game_board.style.display = "block";

    board = new paint.Board(game, game_board);
    board.draw();
}
