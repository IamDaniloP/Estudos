/*
let data = new Date();

//document.write(data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()); // os meses no getMonth vão de janeiro que é 0 até dezembro que é 11, por isso foi inserido + 1.

//adicionando dias
document.write(data.toString());
data.setDate(data.getDate() + 2)
document.write("<hr />")
document.write(data.toString());

//adicionando meses
document.write(data.toString());
data.setMonth(data.getMonth() + 5)
document.write("<hr />")
document.write(data.toString());

//adicionando anos
document.write(data.toString());
data.setFullYear(data.getFullYear() + 5)
document.write("<hr />")
document.write(data.toString());
*/

//realizando operações com datas

//15/01/2017
let data1 = new Date(2017, 0, 15)

//23/02/2017
let data2 = new Date(2017, 1, 23)

document.write(data1.toString())
document.write("<hr />")
document.write(data2.toString())
document.write("<br /> <br /> <hr />")
//converter datas para algo que possa calcular
// calcula a quantidade de milisegundos a partir de 1 de janeiro de 1970 - é um padrão computacional.

document.write(data1.getTime())
document.write("<hr />")
document.write(data2.getTime())
document.write("<br /> <br /> <hr />")
document.write(Math.abs(data1.getTime() - data2.getTime()));

//transformar em dias
document.write("<br /> <br />")
document.write("1 dia possui: " + (1*24*60*60*1000) + " milissegundos")
document.write("<br /> <br />")
document.write("A diferença entre " + data1.toString() + "<br />" + "e " + data2.toString() + "<br />" + " é: " + Math.ceil((Math.abs(data1.getTime() - data2.getTime())) / (1*24*60*60*1000)))

