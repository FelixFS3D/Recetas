import { Link,  } from "react-router-dom";


function RecetaCard(props) {
  const { id, image, name, calories, servings } = props.eachRecetas;



  return (
    <div className="receta-card">
      <Link to={`/recetas/${id}`}>
        <div>
          <img src={image} alt="" width="60px" height="60px" />
          <h2>{name}</h2>

          <p>
            {calories}kcal{" "}
            {calories > 400 ? <span>🫀</span> : <span>🥦</span>}
          </p>
          <p>Raciones: {servings}</p>
        </div>
      </Link>

      <button onClick={() => props.aLaBasura(props.index)}>A la basura</button>
    </div>
  );
}

export default RecetaCard;
