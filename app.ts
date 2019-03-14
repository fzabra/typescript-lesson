import Car from './Car'
import Dealership from './Dealership'
import Customer from './Customer'

/* criar carros */
let carA = new Car('Fusca', 2)
let carB = new Car('Gol', 4)
let carC = new Car('Passat', 4)

/* montar a lista de cars da concessionária */
let carList: Car[] = [carA, carB, carC]
let dealership = new Dealership('Rua Jacob Emmerick', carList)

/* Exibir lista de carros */
console.log('Car List from dealership: \n', dealership.showCarList())

/* Comprar carros */
let client = new Customer('Steve', 'Fusca', '')
console.log('Steve want buy: ', client.provideFavoriteCar())

/** Checar lista de carros */
dealership.showCarList().map((car: Car) =>{
    console.log('xxxxx', car)
    if (car['carModel'] == client.provideFavoriteCar()){
        client.buyCar(car)
        // console.log('>>>>>>>' , client.buyCar(car)) 
    }
})

console.log('Our car is: ', client.whatCarIsHave())