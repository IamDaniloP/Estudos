let nome = "Jorge Sant Ana"

//propriedade length
document.write(+ nome.length)  // retorna a quantidade de caractere

//propriedaded charAt()
document.write("<br />" + nome.charAt(9)) // irá retornar o valor presente naquele indice. O charAt nada mais é do que um método, para isso utiliza-se o ().

//propriedade indexOf
document.write("<br />" + nome.indexOf("g")) // irá retornar o valor do indice que aquela letra se encontra. possui caps sensitive.

//propriedade replace
document.write("<br />" + nome.replace("Sant Ana", "Silva")) // irá procurar a cadeia de caracteres correspondente e irá substituir toda ela por Silva.

//propriedade substr
document.write("<br />" + nome.substr(6,4)) // irá utilizar o primeiro valor do indice para se localizar e o segundo valor irá utilizar para saber quantas "casas" ele irá percorrer.

//propriedade toLowerCase e toUpperCase
document.write("<br />" + nome.toLowerCase()) // irá transformar tudo em letras caixa baixa.

//propriedade trim
document.write("<br />" + nome.trim()) // irá retirar todos os espaços presentes na variável nome