import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector('[data-formulario]');

async function CrearProducto(evento){

    evento.preventDefault();

    const nombre = formulario.querySelector('[data-nombre]').value;
    const precio = formulario.querySelector('[data-precio]').value;
    const imagen = formulario.querySelector('[data-url]').value;

    try{
        await conexionAPI.AgregarProducto(nombre,precio,imagen);
    }catch(e){
        alert(e);
    }
}

formulario.addEventListener('submit',evento => CrearProducto(evento));