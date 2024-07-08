import { conta } from "../model/Conta";

export interface ContaRepository{

    // Métodos do CRUD

    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: conta): void;
    atualizar(conta: conta): void;
    deletar(numero: number): void;

    // Métodos Bancários

    sacar(numero: number, valor: number): void
    depositar(numero: number, valor: number): void
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void

}