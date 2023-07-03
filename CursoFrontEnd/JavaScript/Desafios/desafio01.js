let a = 10;
let b = 20;
let c = null;

if (a == 10) {  //=== - verifica se os valores são idênticos -> ou seja, precisam ter o mesmo tipo e valor  || !== -> não identico -> vai verificar se os valores são diferentes e de tipos diferentes

    c = a;
    a = b;
    b = c;
    c = null;
}

document.write("Valor de a: " + a + " Valor de b: " + b + " Valor de c: " + c);

