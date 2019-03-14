export default class Car{
    private carModel: string
    private carDoors: number
    private speed: number = 0

    constructor(carModel: string, carDoors: number){
        this.carModel = carModel
        this.carDoors = carDoors
    }

    public speedUp(): void{
        this.speed = this.speed + 10
    }

    public stop(): void{
        this.speed = 0
    }

    public currentSpeed(): number{
        return this.speed
    }
}