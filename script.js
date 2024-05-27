function increment(){
    let quantidade = document.getElementById("quantidade").innerText;
    quantidade = parseInt(quantidade);
    quantidade++;
    document.getElementById("quantidade").innerText = quantidade
}


function decrement(){
    let quantidade = document.getElementById("quantidade").innerText;
    quantidade = parseInt(quantidade);
    quantidade--;
    if(quantidade >= 0){
    document.getElementById("quantidade").innerText = quantidade
    }
}
