import Car from './Car'

export default class Customer{
    private name: string
    private favoriteCar: string
    private car: any

    constructor(name: string, favoriteCar: string, car: any){
        this.name = name
        this.favoriteCar = favoriteCar
        this.car = car
    }

    public provideName(): string{
        return this.name
    }

    public provideFavoriteCar(): string{
        return this.favoriteCar
    }

    public buyCar(car: Car): void{
        this.car = car
    }

    public whatCarIsHave(): Car{
        return this.car
    }

}