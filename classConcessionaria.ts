class Carro{
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void{
        this.velocidade = this.velocidade + 10
    }

    public parar(): void{
        this.velocidade = 0
    }

    public velocidadeAtual(): number{
        return this.velocidade
    }
}

class Concessionaria{
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro>{
        return this.listaDeCarros
    }
}

class Pessoa{
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string{
        return this.nome
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido
    }

    public comprarCarro(carro: any): void{
        this.carro = carro
    }

    public mostrarCarroQueTem(): any{
        return this.carro
    }

}

/* criar carros */
let carroA = new Carro('Fusca', 2)
let carroB = new Carro('Gol', 4)
let carroC = new Carro('Passat', 4)


/* montar a lista de carros da concessionária */
let listaDeCarros: Carro[] = [carroA, carroB, carroC]
let concessionaria = new Concessionaria('Rua Jacob Emmerick', listaDeCarros)

console.log(concessionaria.mostrarListaDeCarros())





// let concessionaria = new Concessionaria("Rua Jacob Emmrick, 42");
// console.log(concessionaria)

// let carroA = new Carro("Gol", 4)
// console.log(carroA);
// carroA.acelerar()
// carroA.acelerar()
// carroA.acelerar()
// console.log(carroA);