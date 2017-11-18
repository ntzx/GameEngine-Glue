const core = require("./core.js");

let game = new core.Game();
game.load_config(require("./test_config.js"));
let output = game.render();
//console.log(output);

game.destroy();

console.log("[+] All tests passed");
