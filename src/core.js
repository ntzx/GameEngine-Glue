const gec = Module;

class Game {
    constructor() {
        this.handle = gec._gec_game_new();
        this.native_functions = {
            load_config: gec.cwrap("gec_game_load_config", null, ["number", "string"]),
        };
    }

    ensure_valid() {
        if(!this.handle) {
            throw new Error("Handle to the underlying Game instance is invalid.");
        }
    }

    destroy() {
        this.ensure_valid();
        gec._gec_game_destroy(this.handle);
        this.handle = null;
    }

    load_config(cfg) {
        this.ensure_valid();
        this.native_functions.load_config(this.handle, JSON.stringify(cfg));
    }

    render() {
        this.ensure_valid();
        let s_handle = gec._gec_game_render(this.handle);
        let s = gec.Pointer_stringify(s_handle);
        gec._gec_free_cstring(s_handle);
        return JSON.parse(s);
    }

    set_current_view(id) {
        this.ensure_valid();
        gec._gec_game_set_current_view(this.handle, id);
    }

    set_current_view_without_logic_check(id) {
        this.ensure_valid();
        gec._gec_game_set_current_view_without_logic_check(this.handle, id);
    }
}
module.exports.Game = Game;
