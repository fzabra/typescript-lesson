import Car from './Car'

export default class Customer{
    private name: string
    private favoriteCar: string
    private car: Car

    constructor(name: string, favoriteCar: string){
        this.name = name
        this.favoriteCar = favoriteCar
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