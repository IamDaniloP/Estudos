/* Operadores Ternários 

?: - estrutura. Funciona como um if e else.

Estrutura:

(condição) ? valorVerdadeiro : valorFalso.

*/

const pontuacao = 199; // criei uma variável
let resultado = pontuacao >= 200 ? 'Sim' : 'Não'; //atribui a variável resultado a operação ternária. Antes dos dois pontos é sempre a condição verdadeira, após os dois pontos, é a condição falsa.
console.log(resultado)  // imprime a variável resultado.

const usuarioPadrao = null; // caso o usuário não preencha a cor, seu resultado seria esse.
const corEscolhida = usuarioPadrao || 'preta'; // então na variável que captura a cor ele insere um valor padrão, já que null é considerado um valor falso. Isso se chama fallback. 