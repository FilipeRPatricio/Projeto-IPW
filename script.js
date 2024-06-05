
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


// Sénior
function incrementS(){
    let quantidade = document.getElementById("quantidadeS").innerText;
    quantidade = parseInt(quantidade);
    quantidade++;
    if(quantidade <= 99){
    document.getElementById("quantidadeS").innerText = quantidade
    }
}

function decrementS(){
    let quantidade = document.getElementById("quantidadeS").innerText;
    quantidade = parseInt(quantidade);
    quantidade--;
    if(quantidade >= 0){
    document.getElementById("quantidadeS").innerText = quantidade
    }
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