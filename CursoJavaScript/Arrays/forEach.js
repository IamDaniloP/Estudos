// o forEach só estpá disponível dentro e array. Ele apenas irá realizar iteração.

const a = [1,2,3,4,5];
let total = 0;
a.forEach(valor => total += valor);
console.log(total);