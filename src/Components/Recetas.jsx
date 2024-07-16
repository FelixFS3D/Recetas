
import RecetaCard from "./RecetaCard";
import Formulario from "./Formulario";




function Recetas(props) {
  



  function aLaBasura (index) {
    const clone = JSON.parse(JSON.stringify(props.receta));
    clone.splice(index, 1);
    props.setReceta(clone);
  };

  return (
    <div className="card-container">
      {props.receta.map((eachRecetas, index) => {
        return (
          <RecetaCard key={eachRecetas.id} eachRecetas={eachRecetas} aLaBasura={aLaBasura} index={index} />
        )
       
       
        
      })}
      <Formulario receta={props.receta} setReceta={props.setReceta} />
    </div>
  );
}

export default Recetas;