

let quantidadeC = 0;
let quantidadeJ = 0;
let quantidadeA = 0;
let quantidadeS = 0;

const precoC = 14.99;
const precoJ = 19.99;
const precoA = 24.99;
const precoS = 16.99;

function calcularTotal() {
    const total = (quantidadeC * precoC) + (quantidadeJ * precoJ) + (quantidadeA * precoA) + (quantidadeS * precoS);
    document.getElementById('total').innerHTML = `${total.toFixed(2)} €`;
}




//Botões de + e -

//Bilhete de criança
function incrementC(){
    let quantidade = parseInt(document.getElementById("quantidadeC").innerText);
    quantidade++;
    if(quantidade <= 99){
        document.getElementById("quantidadeC").innerText = quantidade;
        quantidadeC = quantidade
    }
    calcularTotal();
}

function decrementC(){
    let quantidade = document.getElementById("quantidadeC").innerText;
    quantidade--;
    if(quantidade >= 0){
        document.getElementById("quantidadeC").innerText = quantidade;
        quantidadeC = quantidade
    }
    calcularTotal();
}

//Bilhete de Jovem
function incrementJ(){
    let quantidade = document.getElementById("quantidadeJ").innerText;
    quantidade++;
    if(quantidade <= 99){
        document.getElementById("quantidadeJ").innerText = quantidade;
        quantidadeJ = quantidade
    }
    calcularTotal();
}

function decrementJ(){
    let quantidade = document.getElementById("quantidadeJ").innerText;
    quantidade--;
    if(quantidade >= 0){
        document.getElementById("quantidadeJ").innerText = quantidade;
        quantidadeJ = quantidade
    }
    calcularTotal();
}


//Bilhete de Adulto.
function incrementA(){
    let quantidade = document.getElementById("quantidadeA").innerText;
    quantidade++;
    if(quantidade <= 99){
        document.getElementById("quantidadeA").innerText = quantidade;
        quantidadeA = quantidade
    }
    calcularTotal();
}

function decrementA(){
    let quantidade = document.getElementById("quantidadeA").innerText;
    quantidade--;
    if(quantidade >= 0){
        document.getElementById("quantidadeA").innerText = quantidade;
        quantidadeA = quantidade
    }
    calcularTotal();
}


// Bilhete de Sénior
function incrementS(){
    let quantidade = document.getElementById("quantidadeS").innerText;
    quantidade++;
    if(quantidade <= 99){
        document.getElementById("quantidadeS").innerText = quantidade;
        quantidadeS = quantidade
    }
    calcularTotal();
}

function decrementS(){
    let quantidade = document.getElementById("quantidadeS").innerText;
    quantidade--;
    if(quantidade >= 0){
        document.getElementById("quantidadeS").innerText = quantidade;
        quantidadeS = quantidade
    }
    calcularTotal();
}


//Slide de imagens 
function slideImages() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
}

document.addEventListener("DOMContentLoaded", slideImages);


