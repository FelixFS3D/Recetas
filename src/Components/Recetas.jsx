import { useState } from "react";
import recetasArr from "../assets/data/recetas.json";
import RecetaCard from "./RecetaCard";
import { Link } from "react-router-dom";


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
        return <Link to={`/recetas/${eachRecetas.id}`}> <RecetaCard key={eachRecetas.id} eachRecetas={eachRecetas} aLaBasura={aLaBasura} index={index}/>
        </Link>
      })}
    </div>
  );
}

export default Recetas;
