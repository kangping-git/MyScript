"use strict";
function sin(x) {
    return {
        left: "number",
        op: "const",
        right: String(Math.sin(x)),
        vals: {},
        t: []
    };
}
export { sin };
