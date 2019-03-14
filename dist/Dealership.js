"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dealership = /** @class */ (function () {
    function Dealership(adress, carList) {
        this.adress = adress;
        this.carList = carList;
    }
    Dealership.prototype.provideAdress = function () {
        return this.adress;
    };
    Dealership.prototype.showCarList = function () {
        return this.carList;
    };
    return Dealership;
}());
exports.default = Dealership;
