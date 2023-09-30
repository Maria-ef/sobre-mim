import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Sobre from './pages/Sobre'
import Portfolio from './pages/Portfolio'
import Contato from './pages/Contato'
import Footer from './components/Footer'


const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
      <Footer content="Feito por Maria Eduarda com amor! " />
    </BrowserRouter>
  )
}

export default Router