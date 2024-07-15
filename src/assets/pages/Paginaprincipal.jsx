

import { useState } from "react"
import Recetas from "../../Components/Recetas"
import recetasArr from "../data/recetas.json";

function Paginaprincipal() {

 const [recetaDisplay, setRecetaDisplay]= useState(recetasArr)
  
  return (
    <div>
      
<Recetas />


    </div>
  )
}

export default Paginaprincipal