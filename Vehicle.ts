export default class Vehicle{
    protected carModel!: string
    private speed: number = 0
    
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