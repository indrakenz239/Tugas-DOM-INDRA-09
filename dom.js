
const buttton = document.getElementById('ubahfoto');
const h1 = document.getElementById('foto');

const gambar = document.querySelector("img");

buttton.addEventListener("click", gantiFoto);

function gantiFoto(){
    if(gambar.getAttribute("src") == "foto1.jpg")
        gambar.setAttribute("src", "foto2.jpg");
    else if(gambar.getAttribute("src") == "foto2.jpg")
        gambar.setAttribute("src", "foto1.jpg");
}