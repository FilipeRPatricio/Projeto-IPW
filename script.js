var quantidadeC = 0;
var quantidadeJ = 0;
var quantidadeA = 0;
var quantidadeS = 0;

function calcularTotal() {
    const precoC = 14.99;
    const precoJ = 19.99;
    const precoA = 24.99;
    const precoS = 16.99;

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


/*Pagina Atividades*/

function toggleLearnMore(id) {
    const learnMoreContent = document.getElementById(id);
    if (learnMoreContent.style.display === 'none' || learnMoreContent.style.display === '') {
        learnMoreContent.style.display = 'block';
    } else {
        learnMoreContent.style.display = 'none';
    }
}

function bookNow() {
    alert("De momento não estamos a agendar este tipo de atividades");
}

/*Noticias*/

function toggleDetails(id) {
    var details = document.getElementById('details-' + id);
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    }
}



/* Função Abrir e Fechar Mapa */
function openMap() {

    // Guarda-se o mapa com a classe "popup-container"
    var container = document.getElementsByClassName("popup-container")[1];

    // Guarda-se o mapa com o id "popup"
    var popup = document.getElementById("popup");

    // Guarda-se o botão com o id "map-popup"
    var button = document.getElementById("map-popup");

    // Guarda-se o elemento X com a classe "close"
    var X = document.getElementsByClassName("close")[0];

    // Abre o mapa quando se clica no botão
    button.onclick = function() {
        container.style.display="flex";
    }

    // Fecha o mapa quando se clica no X
    X.onclick = function() {
        container.style.display="none";
    }
}
