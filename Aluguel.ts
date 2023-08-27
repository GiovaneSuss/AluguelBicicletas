import { Bicicleta } from "./bicicleta";
import { Cliente } from "./cliente";

export class Aluguel {
    Pessoa: Cliente
    bike: Bicicleta
    Dias: number
    Total: number = 0.0

    constructor(Pessoa: Cliente, bike: Bicicleta, total: number,Dias: number){
        this.Pessoa = Pessoa
        this.bike = bike
        this.Total = total
        this.Dias = Dias
    }

    preço(days: number, diaria: number){
        this.Total = days*diaria
    }

}