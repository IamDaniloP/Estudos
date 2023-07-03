// utilizando delete você consegue excluir o que está dentro do índice mas ele ainda continua existindo.
// o método pop remove o último item do array.
// o método shift remove o primeiro item do array e reorganiza o index.
// o método push insere no final do array.
// o método unshift insere no início do array e reorganiza o index.

// spread - rest
// o array é um valor que é passado por referencia, por isso sempre que ele for alterado também será alterado em todos os lugares que ele existir.
// caso isso seja indesejado, basta apenas criar um spread do array, ele irá copiar o array desejado e não tera mais vinculo de referência.

const arrayTeste = ['jorginho', 'cleitinho', 'manu'];
const nome = [...arrayTeste];
nome.pop();
console.log(nome);
console.log(arrayTeste);

// para fatiar o array basta utilizar o slice
const nome2 = arrayTeste.slice(0, -1);
console.log(nome2);

// separar strings em arrays.
const nomeAluno = 'Danilo Pereira Pessoa';
const nomeAlunoSeparado = nomeAluno.split(" ");
console.log(nomeAlunoSeparado)
//join faz o inverso do split
// trim tira o espaçamento entre as strings
