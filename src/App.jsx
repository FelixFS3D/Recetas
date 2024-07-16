import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import logo from "./assets/Images/Logo1.png";

import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import RecetaDetalle from "./Components/RecetasDeatails.jsx";
import Editar from "./Components/Editar.jsx";

import { useState } from "react";
import recetasArr from "./assets/data/recetas.json";
import Recetas from "./Components/Recetas.jsx";
function App() {
  const [receta, setReceta] = useState(recetasArr);

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
        <Link to="/about">De los creadores de...</Link>
      </aside>
      <Routes>  
        <Route path="/" element={<Recetas receta = {receta} setReceta={setReceta}/>} />
        <Route path="/recetas/:id" element={<RecetaDetalle />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/editar/:id" element={<Editar />} />

      </Routes>

      <footer className="footer">
        <a href="https://github.com/FelixFS3D/Recetas.git">
          Repositorio GitHub
        </a>
      </footer>
    </>
  );
}

export default App;
