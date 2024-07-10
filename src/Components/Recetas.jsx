import { useState } from "react";
import recetasArr from "../assets/data/recetas.json";

function Recetas() {
  const [receta, setReceta] = useState(recetasArr);

  const aLaBasura = (indexBorrar) => {
    const clone = JSON.parse(JSON.stringify(receta));
    clone.splice(indexBorrar, 1);
    setReceta(clone);
  };

  return (
    <div className="card-container">
      {receta.map((eachRecetas, index) => {
        return (
          <div className="receta-card">
            <img src={eachRecetas.image} alt="" width="60px" height="60px" />
            <h2>{eachRecetas.name}</h2>

            <p>
              {eachRecetas.calories}kcal{" "}
              {eachRecetas.calories > 400 ? <span>🫀</span> : <span>🥦</span>}
            </p>
            <p>Raciones: {eachRecetas.servings}</p>
            <button onClick={() => aLaBasura(index)}>A la basura</button>
          </div>
        );
      })}
    </div>
  );
}

export default Recetas;
