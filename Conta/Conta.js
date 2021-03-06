//está class é abstrata não pode ser estanciada, mas sim herdada.
export class Conta{
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) { 
            throw new Error("Não é recomendado estânciar tipo conta. Pois é uma classa abstrata.");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //método abstrato 
    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato");
    }
    
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0; //quando não tem saldo.
    }
    

    depositar(valor) {
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}