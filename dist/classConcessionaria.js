"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.mostrarCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/* criar carros */
var carroA = new Carro('Fusca', 2);
var carroB = new Carro('Gol', 4);
var carroC = new Carro('Passat', 4);
/* montar a lista de carros da concessionária */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Rua Jacob Emmerick', listaDeCarros);
console.log(concessionaria.mostrarListaDeCarros());
// let concessionaria = new Concessionaria("Rua Jacob Emmrick, 42");
// console.log(concessionaria)
// let carroA = new Carro("Gol", 4)
// console.log(carroA);
// carroA.acelerar()
// carroA.acelerar()
// carroA.acelerar()
// console.log(carroA);
