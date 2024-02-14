import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material"

import { getProductByCategory } from "../../../dataProducto";
import { DetalleProducto } from "../../components/DetalleProducto/DetalleProducto";

export const DetalleProductoContainer = () => {

    const [ producto, setProducto ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    const { productoCategoria } = useParams();     

    useEffect(() => {
        setLoading(true)
        getProductByCategory( productoCategoria )
            .then( (res) => {
                setProducto(res);                
            })
            .finally( () => {
                setLoading(false);
            })
    }, [productoCategoria])
    

  return (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            paddingTop: 8,
            paddingBottom: 5
        }}
    >   
        {
            loading ?
                <CircularProgress color="blueTerciary"/>
            :
                <DetalleProducto
                    imageUrl={ producto?.imageUrl }
                    titulo={ producto?.titulo }
                    descripcion={ producto?.descripcion }
                    categoria={ producto?.categoria }
                />                
        }

    </Box>
  )
}
