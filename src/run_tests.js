const core = require("./core.js");

let game = new core.Game();
game.load_config({
    views: [
        {
            "description": "Initial view",
            "choices": []
        }
    ],
    initial_view_id: 0
});
let output = game.render();
console.log(output);

game.destroy();

console.log("[+] All tests passed");
