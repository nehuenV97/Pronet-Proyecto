import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material"

import { Reseñas } from "./Reseñas"
import { ItemProducto } from "../../components/ItemProducto/ItemProducto"
import { ContainerTexto } from "../../components/ContainerTexto/ContainerTexto";
import { ButtonCotizar } from "../../components/ButtonCotizar/ButtonCotizar";
import { RedesSociales } from "../../components/RedesSociales/RedesSociales";
import { CarruselContainer } from "../../components/CarruselContainer/CarruselContainer";
import { getProducts } from "../../../dataProducto";
import { SX_BOX_ITEM_PRODUCTO, SX_GRID_ITEM_1, SX_GRID_ITEM_2 } from "./sxProductos";
import { Estadisticas } from "./Estadisticas";

export const Productos = () => {

  const [ productos, setProductos ] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProductos(res)
      })
  }, [])  

  return (
    <>
        <Grid container id='producto'
          sx={{                        
            p: 1,
            pb: 8
          }}
        >
          <Grid item xs={ 12 } sm={ 6 } 
            sx={ SX_GRID_ITEM_1 }
          >
            <Box
              sx={ SX_BOX_ITEM_PRODUCTO }
            >
              {
                productos.map( producto => (
                  <ItemProducto 
                    key={ producto.id }
                    titulo={ producto.titulo }
                    descripcion={ producto.descripcion }
                    imageUrl={ producto.imageUrl }
                    categoria={ producto.categoria }
                  />
                ))
              }           
            </Box>

          </Grid>

          <Grid item xs={ 12 } sm={ 6 }
            sx={ SX_GRID_ITEM_2 }
          >                
            <Box
              sx={{
                width: '85%'
              }}
            >
              <ContainerTexto 
                titulo={'Tenemos una amplia experiencia'}
                subtitulo={'Productos'}                  
              >
                Usamos una red de rombo de 3x3 cm con las mejores terminaciones
              </ContainerTexto>
              <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%', mt: 4}}>
                <ButtonCotizar 
                  backColor={'blueTerciary'}
                  color={'primary.main'}
                  hoverBackColor={'blueSecondary.main'}
                  hoverColor={'dark.main'}                  
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 8}}>
                <RedesSociales
                  backColor={'blueTerciary'}
                  color={'bluePrimary.main'}
                  hoverBackColor={'blueSecondary.main'}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <CarruselContainer />

        <Reseñas />

        <Estadisticas />
        
    </>
  )
}
