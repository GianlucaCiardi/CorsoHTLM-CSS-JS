"use strict";
exports.__esModule = true;
exports.Rectangle = void 0;
var FIGURE_1 = require("./FIGURE");
// @ts-ignore
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.figure = FIGURE_1.FIGURE.RECTANGLE;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getFigure = function () {
        return this.figure;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
