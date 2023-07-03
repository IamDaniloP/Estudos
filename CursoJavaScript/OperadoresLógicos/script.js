/* 
Operadores Lógicos

> maior que
< menor que
>= maior ou igual
<= menor ou igual
== igualdade (valor) - aqui ele irá checar apenas o valor **NÃO RECOMENDADO**
=== igualdade estrita (valor e tipo) - aqui ele irá checar o valor e o tipo
!= diferente (valor) - **NÃO RECOMENDADO**
!== diferente estrito (valor e tipo) 
*/

/*
Operadores Lógicos

&& -> E - todas as expressões devem ser verdadeiras.
|| -> OU - pelo menos uma expressão deve ser verdadeira.
! -> NÃO - inverte o valor da condição. Ou seja, se é verdadeiro passa a ser falso.
*/

/*
Valores avaliados em FALSY

*false
0
'' "" ``
null / undefined
NaN

*Qualquer valor diferente desses acima é verdadeiro em JavaScript*
*/

/*
Short-Circuit ou Curto-Circuito

O operador lógico && precisa que apenas um seja falso para ele retornar o valor do item falso. Caso todos sejam verdadeiros, ele irá retornar o último valor verdadeiro.
O operador lógico || precisa que apenas um seja verdadeiro para retornar o valor do item verdadeiro. Caso todos sejam falsos, ele irá retornar o último valor falso.
Veja o exemplo abaixo:

let a = '';
let b = 'cleiton';
let c = NaN;
let d = 0;

console.log(a || b || c || d);
*/