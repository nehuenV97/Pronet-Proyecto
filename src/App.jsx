// import './App.css'
import FooterApp from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import TabsMenu from './components/TabsMenu/TabsMenu'
import { BrowserRouter } from 'react-router-dom'
import Quienes from './pages/QuienesSomos/Quienes'
import ContainerGaleria from './pages/Galeria/ContainerGaleria'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />        
        <TabsMenu />
        <Quienes />
        <ContainerGaleria />
        <FooterApp />
      </BrowserRouter>
    </>
  )
}

export default App
