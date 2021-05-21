import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Tanjiro", 5000, 12345785404);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 7845784687, "451");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");


const clientEstaLogado = SistemaAutenticacao.login(cliente, "451");
console.log(gerenteEstaLogado, diretorEstaLogado, clientEstaLogado);