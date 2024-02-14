import { Contacto } from "../../sections/Contacto/Contacto"
import { Home } from "../../sections/Home/Home"
import { Productos } from "../../sections/Productos/Productos"
import { Quienes } from "../../sections/QuienesSomos/Quienes"

export const PaginaPrincipal = () => {
  return (
    <>
        <Home />
        <Productos />
        <Quienes />
        <Contacto />
    </>
  )
}
