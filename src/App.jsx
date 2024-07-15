
import './App.css'
import Paginaprincipal from './assets/pages/Paginaprincipal.jsx'
import { Routes, Route, Link } from 'react-router-dom'
import logo from "./assets/Images/Logo1.png";
import PaginaRecetas from './assets/pages/PaginaRecetas.jsx';
import About from './assets/pages/About.jsx';
import NotFound from './assets/pages/NotFound.jsx';
import RecetaDetalle from './Components/RecetasDeatails.jsx';
import Editar from './Components/Editar.jsx';


function App() {
 

  return (
    <>
     <nav className="navBar">
        <h1>COCINA CON SABOR</h1>
        <img src={logo} alt="" width={"70px"} />
      </nav>

      <aside className="aside">
          <br />

          <Link to="/">Tutti los platis</Link>
          <br />
          <Link to = "/about">De los creadores de...</Link>
          
          </aside>
    <Routes>
  
<Route path="/" element={<Paginaprincipal />}/>
<Route path="/recetas/:id" element={<RecetaDetalle />}/>
<Route path="/about" element={<About />}/>
<Route path="*" element={<NotFound />}/>
  <Route path='/editar/:id' element = {<Editar/>} />
      </Routes>
    
      <footer className="footer">
        <a href="https://github.com/FelixFS3D/Recetas.git">
          Repositorio GitHub
        </a>
      </footer>
    </>
    
  )
}

export default App