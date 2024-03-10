import { AppTheme } from './theme'
import { NavBar } from './components/NavBar/NavBar'
import { FooterApp } from './components/Footer/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PaginaPrincipal } from './pages/PaginaPrincipal/PaginaPrincipal'
import { DetalleProductoContainer } from './pages/DetalleProductoContainer/DetalleProductoContainer'
import { MensajeEnvio } from './components/Formulario/MensajeEnvio'

export const PronetApp = () => {
  return (
    <AppTheme>          
      <NavBar />
      <Routes>
        <Route path='/' element={ <PaginaPrincipal /> } />
        <Route path='/producto/:productoCategoria' element={ <DetalleProductoContainer /> } />
        <Route path='/*' element={ <Navigate to='/' /> } />
        <Route path='/envio' element={ <MensajeEnvio /> } />
      </Routes>      
      <FooterApp />     
    </AppTheme>
  )
}

