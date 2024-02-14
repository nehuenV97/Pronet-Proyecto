export const dataProducto = [
    {
        id: 1,
        titulo: 'Balcones',
        categoria: 'balcones',
        descripcion: 'Descripcion de Balcones: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        imageUrl: '/src/assets/imagenesProducto/Balcones.svg'
    },
    {
        id: 2,
        titulo: 'Escaleras',
        categoria: 'escaleras',
        descripcion: 'Descripcion de Escaleras: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        imageUrl: '/src/assets/imagenesProducto/Escaleras.svg'
    },
    {
        id: 3,
        titulo: 'Ventanas',
        categoria: 'ventanas',
        descripcion: 'Descripcion de Ventanas: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        imageUrl: '/src/assets/imagenesProducto/Escaleras.svg'
    },
    {
        id: 4,
        titulo: 'Terrazas',
        categoria: 'terrazas',
        descripcion: 'Descripcion de Terrazas: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        imageUrl: '/src/assets/imagenesProducto/Balcones.svg'
    }   
]

export const getProducts = () => {
    return new Promise( (resolve) => {
        resolve(dataProducto);        
    })    
}

export const getProductByCategory = ( productCategory ) => {
    return new Promise( (resolve) => {
        setTimeout(() => {        
            resolve( dataProducto.find( producto => producto.categoria === productCategory ) );
        }, 500)   
    })
}
