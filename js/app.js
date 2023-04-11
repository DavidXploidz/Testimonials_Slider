const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const quote = document.querySelector('.info__quote');

let index = 0;

const consultarData = async () => {
    const url = "https:/localhost:5500/data.json";
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);
}

document.addEventListener('DOMContentLoaded', () => {
    consultarData();
});


prev.addEventListener('click', () => {
    console.log('Prev');
});

next.addEventListener('click', () => {
    console.log('Next');
});