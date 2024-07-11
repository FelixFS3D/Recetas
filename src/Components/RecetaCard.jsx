
import { useParams } from "react-router-dom"

function RecetaCard(props) {
  
  const recetasId = useParams()


  return (
        <div className="receta-card" >
            <img src={props.eachRecetas.image} alt="" width="60px" height="60px" />
            <h2>{props.eachRecetas.name}</h2>

            <p>
              {props.eachRecetas.calories}kcal{" "}
              {props.eachRecetas.calories > 400 ? <span>🫀</span> : <span>🥦</span>}
            </p>
            <p>Raciones: {props.eachRecetas.servings}</p>
            <button onClick={() => props.aLaBasura(props.index)}>A la basura</button>
          </div>
  )
}

export default RecetaCard