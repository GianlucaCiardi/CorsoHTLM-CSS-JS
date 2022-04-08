"use strict";
exports.__esModule = true;
exports.Triangle = void 0;
var FIGURE_1 = require("./FIGURE");
// @ts-ignore
var Triangle = /** @class */ (function () {
    function Triangle(width, height) {
        this.figure = FIGURE_1.FIGURE.TRIANGLE;
        this.width = width;
        this.height = height;
    }
    Triangle.prototype.getFigure = function () {
        return this.figure;
    };
    Triangle.prototype.getWidth = function () {
        return this.width;
    };
    Triangle.prototype.getHeight = function () {
        return this.height;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
