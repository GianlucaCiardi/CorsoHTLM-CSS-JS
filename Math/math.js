"use strict";
exports.__esModule = true;
var Math = /** @class */ (function () {
    function Math() {
    }
    Math.prototype.squareArea = function (square) {
        this.width = square.getWidth();
        return this.width * this.width;
    };
    Math.prototype.rectangleArea = function (rect) {
        this.width = rect.getWidth();
        this.height = rect.getHeight();
        return this.width * this.height;
    };
    Math.prototype.triangleArea = function (tr) {
        this.width = tr.getWidth();
        this.height = tr.getHeight();
        return (this.width * this.height) / 2;
    };
    return Math;
}());
