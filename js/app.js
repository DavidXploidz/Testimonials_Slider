// Globales
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const quoteTxt = document.querySelector('.info__quote');
const nameTxt = document.querySelector('#name');
const rolTxt = document.querySelector('#rol');
const imageUser = document.querySelector('#image-user');

const spinner = document.querySelector('.spinner');
const backdrop = document.querySelector('.backdrop');

let index = 0;
let resultado;

document.addEventListener('DOMContentLoaded', () => {
    consultarData();
});

const consultarData = async () => {
    spinner.style.display = "block";
    backdrop.style.display = "block";
    const url = "https://my-json-server.typicode.com/DavidXploidz/Testimonials_Slider/users";
    const respuesta = await fetch(url);
    resultado = await respuesta.json();
    mostrarInfo(resultado[index]);
    spinner.style.display = "none";
    backdrop.style.display = "none";
}

function mostrarInfo(datos){
    const { id, name, quote, rol, image } = datos;

    quoteTxt.textContent = quote;
    nameTxt.textContent = name;
    rolTxt.textContent = rol;
    imageUser.src = image;
}

prev.addEventListener('click', () => {
    index --;
    animacion();
    if(index < 0){
        index = resultado.length - 1;
    }
    consultarData();
});

next.addEventListener('click', () => {
    index ++;
    animacion();
    if(index > resultado.length - 1){
        index = 0;
    }
    consultarData();
});

function animacion(){
    quoteTxt.classList.add('info__quote--animate');
    imageUser.classList.add('carrusel__user--animate');
    setTimeout(() => {
        quoteTxt.classList.remove('info__quote--animate');
        imageUser.classList.remove('carrusel__user--animate');
    },500)
}