// Funções de callback, são funções encaminhadas como parâmetro para outras funções.

function exibirArtigo (id, callbackSucesso, callbackErro) {
    //lógica: recuperar o id via requisição https

    if(true){
        callbackSucesso("Funções de callback em JS", "Funções de callback são muito utilizadas")
    } else {
        callbackErro("Erro ao recuperar os dados")
    }
}

//técnica de wrapper
let callbackSucesso = function(titulo, descricao) {
    document.write("<h1>" + titulo + "</h1>")
    document.write("<hr />")
    document.write("<p>" + descricao + "</p>")
}

let callbackErro = function(erro) {
    document.write("<p><b>Erro:</b>" + erro + "</p>")
}

exibirArtigo(1, callbackSucesso, callbackErro);