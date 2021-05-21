export class Funcionario {
  constructor(nome, salario, cpf) {
    this._nome = nome;
    this._salario = salario;
    this._cpf = cpf;
    this._bonificacao = 1;
    this._senha;
  }

//   get senha(){ //acessor get, acessando senha de modo seguro use get no encapsulamento.
//       return this._senha; 
//   }

//melhorando a restrição de senha exposta.
autenticar(senha){
    return senha == this._senha;
}
  cadastrarSenha(senha){  //criando senha do usuário
      this._senha = senha;
  }
}
