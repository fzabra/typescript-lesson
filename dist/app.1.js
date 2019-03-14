"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = __importDefault(require("./Car"));
var Dealership_1 = __importDefault(require("./Dealership"));
var Customer_1 = __importDefault(require("./Customer"));
/* criar carros */
var carA = new Car_1.default('Fusca', 2);
var carB = new Car_1.default('Gol', 4);
var carC = new Car_1.default('Passat', 4);
/* montar a lista de cars da concessionária */
var carList = [carA, carB, carC];
var dealership = new Dealership_1.default('Rua Jacob Emmerick', carList);
/* Exibir lista de carros */
console.log('Car List from dealership: \n', dealership.showCarList());
/* Comprar carros */
var client = new Customer_1.default('Steve', 'Fusca', '');
console.log('Steve want buy: ', client.provideFavoriteCar());
/** Checar lista de carros */
dealership.showCarList().map(function (car) {
    console.log('xxxxx', car);
    if (car['carModel'] == client.provideFavoriteCar()) {
        client.buyCar(car);
        // console.log('>>>>>>>' , client.buyCar(car)) 
    }
});
console.log('Our car is: ', client.whatCarIsHave());
