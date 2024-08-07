
const productos = [
    
        { id: 1, categoria: 'semillas', nombre: 'Semilla de tomate', precio: 10.99, img:"" },
        { id: 2, categoria: 'semillas', nombre: 'Semilla de pepino', precio: 9.99, img:"" },
        { id: 3, categoria: 'macetas', nombre: 'Maceta pequeña', precio: 5.99, img:"" },
        { id: 4, categoria: 'macetas', nombre: 'Maceta grande', precio: 12.99, img:"" },
        { id: 5, categoria: 'fertilizantesPesticidas', nombre: 'Fertilizante orgánico', precio: 15.99, img:"" },
        { id: 6, categoria: 'fertilizantesPesticidas', nombre: 'Fertilizante químico', precio: 20.99, img:"" },
        { id: 7, categoria: 'fertilizantesPesticidas', nombre: 'Pesticida natural', precio: 8.99, img:"" },
        { id: 8, categoria: 'fertilizantesPesticidas', nombre: 'Pesticida químico', precio: 12.99, img:"" }
];

        export const getProductos= () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(productos);
                }, 2000);
            })
        }
        
    
        
        export const getProductoById = (productId)=> {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const producto = productos.find(producto => producto.id === productId);
                    resolve(producto);
                }, 1500);
            });
        }
    
