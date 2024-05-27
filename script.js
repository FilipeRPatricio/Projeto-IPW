
//Criança
function incrementC(){
    let quantidade = document.getElementById("quantidadeC").innerText;
    quantidade = parseInt(quantidade);
    quantidade++;
    if(quantidade <= 99){
    document.getElementById("quantidadeC").innerText = quantidade;
    }
}

function decrementC(){
    let quantidade = document.getElementById("quantidadeC").innerText;
    quantidade = parseInt(quantidade);
    quantidade--;
    if(quantidade >= 0){
    document.getElementById("quantidadeC").innerText = quantidade;
    }
}

//Jovem
function incrementJ(){
    let quantidade = document.getElementById("quantidadeJ").innerText;
    quantidade = parseInt(quantidade);
    quantidade++;
    if(quantidade <= 99){
    document.getElementById("quantidadeJ").innerText = quantidade;
    }
}

function decrementJ(){
    let quantidade = document.getElementById("quantidadeJ").innerText;
    quantidade = parseInt(quantidade);
    quantidade--;
    if(quantidade >= 0){
    document.getElementById("quantidadeJ").innerText = quantidade;
    }
}


//Adulto
function incrementA(){
    let quantidade = document.getElementById("quantidadeA").innerText;
    quantidade = parseInt(quantidade);
    quantidade++;
    if(quantidade <= 99){
    document.getElementById("quantidadeA").innerText = quantidade
    }
}

function decrementA(){
    let quantidade = document.getElementById("quantidadeA").innerText;
    quantidade = parseInt(quantidade);
    quantidade--;
    if(quantidade >= 0){
    document.getElementById("quantidadeA").innerText = quantidade
    }
}