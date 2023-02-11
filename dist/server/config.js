"use strict";
exports.__esModule = true;
exports.Config = void 0;
var Config = /** @class */ (function () {
    function Config() {
        this.PORT = Number(process.env.PORT) || 3000;
    }
    return Config;
}());
exports.Config = Config;
