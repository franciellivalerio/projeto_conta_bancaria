import { conta } from "./Conta";

export class ContaCorrente extends conta{

    private _limite: number;


	constructor(limite: number, numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
	}

	public get limite(): number {
		return this._limite;
	}

	public set limite(value: number) {
		this._limite = value;

	}

    // Método sacar sobrescrito da classe conta
    public sacar(valor: number): boolean{

		if((this.saldo + this._limite) >= valor){
            this.saldo = this.saldo - valor;
            return true;
		}

        console.log("O saldo é insuficiente!")
        return false;

	}

    public visualizar(){
        super.visualizar();
        console.log(`Limite: ${this._limite}`);
    }
}