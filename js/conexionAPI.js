const url = "http://localhost:3001/productos";

async function ObtenerProductos(){
    const conexion = await fetch(url);
    const dataConexion = await conexion.json();
    
    return dataConexion;
}

async function AgregarProducto(nombre,precio,imagen){
    const conexion = await fetch(url,{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            nombre:nombre,
            precio: precio,
            imagen: imagen,
            id: ObtenerProductos().length + 1
        })
    });
    const dataConexion = await conexion.json();

    if(!conexion.ok){
        throw new Error('Ha ocurrido un error al agregar el producto');
    }

    return dataConexion;
}

/* async function EliminarProducto(id){
    const conexion = await fetch(`${url}?id=${id}`,{
        method: 'DELETE'
    });

    const dataConexion = await conexion.json();

    if(!conexion.ok){
        throw new Error('Ha ocurrido un error al eliminar el producto');
    }

    return dataConexion;
} */

export const conexionAPI = {
    ObtenerProductos, AgregarProducto,EliminarProducto
}