import Vehicle from './Vehicle'

export default class Car extends Vehicle{
    private carDoors: number

    constructor(carModel: string, carDoors: number){
        super()
        this.carModel = carModel
        this.carDoors = carDoors
    }
    
}