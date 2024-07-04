import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {

    let opcao: number;

    // Novas instancias da calsse conta (Objetos da calsse conta)

    const c1: conta = new conta(1, 1234, 1, 'Barbara Helen', 800000.00);
    const c2: conta = new conta(2, 1234, 2, 'Nadia Valerio', 600000.00);
   
    console.log(`O saldo da conta 01 é: ${c1.saldo}`);

    c1.visualizar();
    c2.visualizar();

    //Saque nas contas
    console.log(`\nSacar 100 reais da conta C1: ${c1.sacar(100)}`); //true
    c1.visualizar();

    console.log(`\nSacar 700000 reais da conta C2: ${c2.sacar(700000)}\n`); //false
    c2.visualizar();

     //Deposito nas contas
    console.log(`Depositar 1000000 reais da conta C1: ${c1.depositar(1000000)}`);
    c1.depositar(1000000);
    c1.visualizar();
    
    console.log(`Depositar 900000 reais da conta C2: ${c2.depositar(700000)}`);
    c2.depositar(900000);
    c2.visualizar();

     // Novas instancias da calsse ContaCorrente

     const cc1: ContaCorrente = new ContaCorrente(100000, 3, 1234, 1, "Francielli Valerio", 1000000);
     const cc2: ContaCorrente = new ContaCorrente(100, 4, 1234, 1, "Ester Valerio", 1000);

    cc1.visualizar();
    cc2.visualizar();

    console.log(`\nSaque de R$25.000,00 na conta CC1: ${cc1.sacar(25000)}`);
    console.log(`\nSaque de R$1.500,00 na conta CC2: ${cc2.sacar(15000)}`);

    console.log(`\nDepositar R$3.000,99 da conta CC2: `);
    cc2.depositar(3000.99);
    cc2.visualizar();

        // Novas instancias da calsse ContaPoupanca
        const contapoupanca: ContaPoupanca = new ContaPoupanca(5, 1234, 2, "Paulo Cesar", 5000, 10);
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
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

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

main();