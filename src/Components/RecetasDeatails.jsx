import React from "react";

import { Link, useParams } from "react-router-dom";

import { useParams } from "react-router-dom";

import recetasArr from "../assets/data/recetas.json";
import RecetaCard from "./RecetaCard";

function RecetaDetalle() {
  const { id } = useParams();
  const receta = recetasArr.find((receta) => receta.id.toString() === id);

  return (
    <div>
      {" "}
      <RecetaCard eachRecetas={receta} aLaBasura={() => {}} index={-1} />{" "}

      <Link to={`/editar/${id}`}><button>Ir a Editar</button></Link>
    </div>
  );
}
export default RecetaDetalle;



