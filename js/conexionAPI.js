const url = "http://localhost:3001/productos";

async function ObtenerProductos(){
    const conexion = await fetch(url);
    const dataConexion = await conexion.json();
    
    return dataConexion;
}

export const conexionAPI = {
    ObtenerProductos
}