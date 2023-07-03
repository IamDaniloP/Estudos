let opcao = prompt("Digite a opção que você deseja: ")
opcao = parseInt(opcao);

switch (opcao) {

    case 1:
        document.write("Você escolheu a opção 1")
        break;
    case 2:
        document.write("Você escolheu a opção 2")
        break;
    default:
        document.write("Você escolheu a opção 3")
        break;
}