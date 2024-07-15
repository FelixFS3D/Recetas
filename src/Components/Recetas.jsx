import { useState} from "react";
import recetasArr from "../assets/data/recetas.json";
import RecetaCard from "./RecetaCard";
import Formulario from "./Formulario";




function Recetas() {
  const [receta, setReceta] = useState(recetasArr);



  function aLaBasura (index) {
    const clone = JSON.parse(JSON.stringify(receta));
    clone.splice(index, 1);
    setReceta(clone);
  };

  return (
    <div className="card-container">
      {receta.map((eachRecetas, index) => {
        return (
          <RecetaCard key={eachRecetas.id} eachRecetas={eachRecetas} aLaBasura={aLaBasura} index={index} />
        )
        //Este hace que no funcione el boton
        //<Link to={`/recetas/${eachRecetas.id}`}>  </Link>
       
        
      })}
      <Formulario receta={receta} setReceta={setReceta} />
    </div>
  );
}

export default Recetas;
