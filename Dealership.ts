import Car from './Car'

export default class Dealership{
    private adress: string
    private carList: Array<Car>

    constructor(adress: string, carList: Array<Car>){
        this.adress = adress
        this.carList = carList
    }

    public provideAdress(): string{
        return this.adress
    }

    public showCarList(): Array<Car>{
        return this.carList
    }
}