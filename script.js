function increment(){
    let quantidade = document.getElementById("quantidadeCriança").innerText;
    quantidade = parseInt(quantidade);
    quantidade++;
    document.getElementById("quantidadeCriança").innerText = quantidade
}

function decrementa(){
    let quantidade = document.getElementById("quantidadeCriança").innerText;
    quantidade = parseInt(quantidade);
    quantidade--;
    document.getElementById("quantidadeCriança").innerText = quantidade
}