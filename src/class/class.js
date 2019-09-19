var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto() {
        this.state = 1;
        this.state1 = 2;
        this.state2 = 3;
    }
    return Auto;
}());
var SubAuto = /** @class */ (function (_super) {
    __extends(SubAuto, _super);
    function SubAuto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubAuto.prototype.show = function () {
        console.log(this.state);
        console.log(this.state2);
    };
    return SubAuto;
}(Auto));
var subAuto = new SubAuto();
subAuto.show();
console.log(subAuto);
