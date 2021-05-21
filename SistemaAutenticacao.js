export class SistemaAutenticacao {
    static login(autenticavel, senha){ //usando static não precisamos estanciar para usar.
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false; //caso não passar no if.
    }

    static ehAutenticavel(autenticavel){ //aqui está verificando se existe a chave autenticar, javascript referencia atributo e propriedade pelo sistema chave valor.
        return "autenticar" in autenticavel && //se for verdadeiro ele vai retornar.
        autenticavel.autenticar instanceof Function //aqui verifica que está estanciado.
    }
}