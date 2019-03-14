"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = __importDefault(require("./Car"));
var Motocycle_1 = __importDefault(require("./Motocycle"));
var car = new Car_1.default('Fusca', 4);
var motocycle = new Motocycle_1.default();
console.log(car);
console.log(motocycle);
