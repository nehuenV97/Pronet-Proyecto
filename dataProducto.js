export const dataProducto = [
    {
        id: 1,
        titulo: 'Balcones',
        categoria: 'balcones',
        descripcion: 'Descripcion de Balcones: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        imageUrl: 'https://res.cloudinary.com/dcdq98enp/image/upload/v1709218862/pronet/prodBalcones_lkcr2h.svg'
    },
    {
        id: 2,
        titulo: 'Escaleras',
        categoria: 'escaleras',
        descripcion: 'Descripcion de Escaleras: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        imageUrl: 'https://res.cloudinary.com/dcdq98enp/image/upload/v1709218832/pronet/prodEscaleras_bo0hxr.svg'
    },
    {
        id: 3,
        titulo: 'Ventanas',
        categoria: 'ventanas',
        descripcion: 'Descripcion de Ventanas: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        imageUrl: 'https://res.cloudinary.com/dcdq98enp/image/upload/v1709218832/pronet/prodEscaleras_bo0hxr.svg'
    },
    {
        id: 4,
        titulo: 'Terrazas',
        categoria: 'terrazas',
        descripcion: 'Descripcion de Terrazas: Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        imageUrl: 'https://res.cloudinary.com/dcdq98enp/image/upload/v1709218862/pronet/prodBalcones_lkcr2h.svg'
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
