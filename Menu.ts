import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaController } from "./src/controller/ContaController";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupança'];

    const contas: ContaController = new ContaController();

    // Novas instancias da classe ContaCorrente (Objetos)

    const cc1: ContaCorrente = new ContaCorrente(100000.00, 3, 1234, 1, 'Francielli Valerio', 1000000.00, );
    const cc2: ContaCorrente = new ContaCorrente(100.00, 4, 1234, 1, 'Ester Valerio', 1000.00, );
   
    cc1.visualizar();
    cc2.visualizar();

    console.log(`\nSaque de R$ 25.000 na Conta CC1: ${cc1.sacar(20000)}`); //true
    cc1.visualizar();

    console.log(`\nSaque de R$ 10.000 na conta CC2: ${cc2.sacar(10000)}\n`); //false
    cc2.visualizar();

     //Deposito nas contas
    console.log(`Depositar R$ 2.500 reais da conta CC1: ${cc1.depositar(1000000)}`);
    cc1.depositar(2500);
    cc1.visualizar();
    
    console.log(`Depositar R$ 900.00 reais da conta CC2: ${cc2.depositar(700000)}`);
    cc2.depositar(900);
    cc2.visualizar();

     // Objetos da Classe ContaPoupanca (teste)

     const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Paulo", 1000, 10);
     contapoupanca.visualizar();
     contapoupanca.sacar(200);
     contapoupanca.visualizar();
     contapoupanca.depositar(1000);
     contapoupanca.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.blue,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO MONEY SECURITY                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.magentastrong,
                "\nBanco Money Security - Seu dinheiro está seguro aqui!");
            sobre();
            console.log(colors.reset,"")
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);

                console.log('Digite o Número da Agência: ');
                agencia = readlinesync.questionInt("");

                console.log('Digite o Nome do Titular da Conta: ');
                titular = readlinesync.question("");

                console.log('Digite o Tipo da Conta: ');
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log('Digite o Saldo da Conta: ');
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log('Digite o Limite da Conta: ');
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), limite, agencia, tipo, titular, saldo)
                        )
                        break;
                    case 2:
                        console.log('Digite a Data de Aniversário da Conta: ');
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);
                    contas.listarTodas();
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                    console.log("Digite o número da Conta: ")
                    numero = readlinesync.questionInt("");

                    contas.procurarPorNumero(numero);
                    
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log(colors.fg.cyan,"\n*****************************************************");
    console.log("Projeto Desenvolvido por: Francielli Valerio - 2024");
    console.log("email: franciellivaleriodeoliveira@gmail.com");
    console.log("github.com/franciellivalerio");
    console.log("*****************************************************",
        colors.reset);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();