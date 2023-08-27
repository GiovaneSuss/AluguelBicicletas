import { Aluguel } from "./Aluguel";
import { Bicicleta } from "./bicicleta";
import { Cliente } from "./cliente";
import { Sistema } from "./sistema";

const System = new Sistema

const joao = new Cliente('Joao da Silva', '123456789-10')
const BicicletaJoao = new Bicicleta('001')
const AluguelJoao = new Aluguel(joao,BicicletaJoao,0,5)

System.Tira()
AluguelJoao.preço(AluguelJoao.Dias,BicicletaJoao.preço)

console.log('Nome: ',joao.nome,'\nCPF: ',joao.cpf,'\nNúmero da Bicicleta: ',BicicletaJoao.chave)
console.log('Quantidade de Dias: ',AluguelJoao.Dias,'\nTotal Do aluguel: ',AluguelJoao.Total,'R$')
console.log('Total de bicicletas sobrando: ',System.disponiveis)

const Carlos = new Cliente('Carlos Alberto', '109876543-21')
const BicicletaCarlos = new Bicicleta('002')
const AluguelCarlos = new Aluguel(Carlos,BicicletaCarlos,0,10)

System.Tira()
AluguelCarlos.preço(AluguelCarlos.Dias,BicicletaCarlos.preço)

console.log('Nome: ',Carlos.nome,'\nCPF: ',Carlos.cpf,'\nNúmero da Bicicleta: ',BicicletaCarlos.chave)
console.log('Quantidade de Dias: ',AluguelCarlos.Dias,'\nTotal Do aluguel: ',AluguelCarlos.Total,'R$')
console.log('Total de bicicletas sobrando: ',System.disponiveis)








