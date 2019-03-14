"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(name, favoriteCar) {
        this.name = name;
        this.favoriteCar = favoriteCar;
    }
    Customer.prototype.provideName = function () {
        return this.name;
    };
    Customer.prototype.provideFavoriteCar = function () {
        return this.favoriteCar;
    };
    Customer.prototype.buyCar = function (car) {
        this.car = car;
    };
    Customer.prototype.whatCarIsHave = function () {
        return this.car;
    };
    return Customer;
}());
exports.default = Customer;
