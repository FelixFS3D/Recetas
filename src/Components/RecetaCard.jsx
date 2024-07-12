
import { Link, useParams } from "react-router-dom"

function RecetaCard(props) {
  
  const recetasId = useParams()
  //const recetasProfile = recetasArr.find((receta) => receta.id === recetasId);



  return (
        <div className="receta-card" >
          <Link to = {`/recetas/${props.eachRecetas.id}`}>
          <div>
          <img src={props.eachRecetas.image} alt="" width="60px" height="60px" />
            <h2>{props.eachRecetas.name}</h2>

            <p>
              {props.eachRecetas.calories}kcal{" "}
              {props.eachRecetas.calories > 400 ? <span>🫀</span> : <span>🥦</span>}
            </p>
            <p>Raciones: {props.eachRecetas.servings}</p>
          </div>
          </Link>
          
            
            <button onClick={() => props.aLaBasura(props.index)}>A la basura</button>
          </div>
  )
}

export default RecetaCard