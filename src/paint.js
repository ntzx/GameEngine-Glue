const core = require("./core.js");

class Board {
    constructor(game, element) {
        if(!(game instanceof core.Game)) {
            throw new Error("An instance of Game is required");
        }
        this.game = game;
        this.element = element;
    }

    draw() {
        let rs = this.game.render(); // rs: RenderedState

        let content_box = document.createElement("div");
        content_box.className = "game-engine-content-box";

        Object.assign(content_box.style, {
            position: "absolute",
            width: "100%",
            height: "192px",
            background: "#FFFFFF",
            bottom: "0px",
            wordWrap: "break-word",
            overflowX: "hidden",
            overflowY: "scroll"
        });

        let desc_container = document.createElement("div");
        desc_container.className = "game-engine-description-container";
        desc_container.innerHTML = escape_html_string(rs.description);

        Object.assign(desc_container.style, {
            width: "100%",
            background: "#0066CC",
            padding: "16px",
            boxSizing: "border-box",
            color: "#FFFFFF",
            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.75)"
        });

        content_box.appendChild(desc_container);

        let choice_container = document.createElement("ul");
        choice_container.className = "game-engine-choice-container";

        Object.assign(choice_container.style, {
            width: "100%",
            background: "#FFFFFF",
            padding: "16px",
            boxSizing: "border-box"
        });

        for(let ch of rs.choices) {
            let elem = document.createElement("li");
            elem.className = "game-engine-choice-item";

            Object.assign(elem.style, {
                display: "block",
                width: "100%",
                padding: "12px",
                boxSizing: "border-box"
            });

            elem.innerHTML = escape_html_string(ch.description);
            elem.addEventListener("click", () => {
                this.game.set_current_view(ch.target_view_id);
                this.draw();
            });
            choice_container.appendChild(elem);
        }

        content_box.appendChild(choice_container);

        this.element.innerHTML = "";
        this.element.appendChild(content_box);
        if(rs.background_image) {
            this.element.style.backgroundImage = "url(" + rs.background_image + ")";
            this.element.style.backgroundSize = "cover";
        } else {
            this.element.style.background = "#7F7F7F";
        }
    }
}
module.exports.Board = Board;

function escape_html_string(s) {
    let ret = "";
    for(let c of s) {
        if(c == '<') ret += "&lt;";
        else if(c == '>') ret += "&gt;";
        else ret += c;
    }
    return ret;
}
