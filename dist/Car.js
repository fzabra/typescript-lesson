"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(carModel, carDoors) {
        this.speed = 0;
        this.carModel = carModel;
        this.carDoors = carDoors;
    }
    Car.prototype.speedUp = function () {
        this.speed = this.speed + 10;
    };
    Car.prototype.stop = function () {
        this.speed = 0;
    };
    Car.prototype.currentSpeed = function () {
        return this.speed;
    };
    return Car;
}());
exports.default = Car;
