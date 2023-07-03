let app = document.getElementById('infos-main')
let divContainer = document.getElementsByClassName('caixas-info')
let next = 1; //caso o contador comece em 0 ele irá obter o valor de 0 e não passará a imagem.

setInterval(()=>{
    for(let i=0; i<divContainer.length; i++){
        divContainer[i].style.transform = `translate(${-next * 1250}px)`
    }
    
    next++
    if(next >= divContainer.length){
        next = 0
    }
},7000)

app.addEventListener('click', ()=>{
    for(let i=0; i<divContainer.length; i++){
        divContainer[i].style.transform = `translate(${-next * 1250}px)`
    }
    
    next++
    if(next >= divContainer.length){
        next = 0
    }
})
