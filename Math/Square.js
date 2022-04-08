"use strict";
exports.__esModule = true;
exports.Square = void 0;
var FIGURE_1 = require("./FIGURE");
// @ts-ignore
var Square = /** @class */ (function () {
    function Square(width) {
        this.figure = FIGURE_1.FIGURE.SQUARE;
        this.width = width;
    }
    Square.prototype.getFigure = function () {
        return this.figure;
    };
    Square.prototype.getWidth = function () {
        return this.width;
    };
    return Square;
}());
exports.Square = Square;
