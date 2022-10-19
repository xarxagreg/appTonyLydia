"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
class Handler {
    static salute(request, response) {
        response.send("Hola Mundo");
    }
    ;
}
exports.Handler = Handler;
