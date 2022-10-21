var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(sname) {
        this.shapename = sname;
    }
    Shape.prototype.printShapename = function () {
        console.log("Shape name:-" + this.shapename);
    };
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(sname, side) {
        var _this = _super.call(this, sname) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.square_area = function () {
        console.log("area of ");
        this.printShapename();
        console.log("area:- ");
        console.log(this.side * this.side);
    };
    return Square;
}(Shape));
var obj = new Square("square", 10);
obj.square_area();
