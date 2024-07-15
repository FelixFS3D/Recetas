import { useState,useParams } from "react"




function Editar() {
    const [image, setImage] = useState(``);
    const [name, setName] = useState(``);
    const [calories, setCalories] = useState(0);
    const [raciones, setRaciones] = useState(0);
    const { id } = useParams();
  const receta = recetasArr.find((receta) => receta.id.toString() === id);

 const handleSubmit = (event) => {
    event.preventDefault();

    const newReceta = {
      id: recetasArr.length + 1,
      image,
      name,
      calories,
      raciones,
    };
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Imagen
          <input
            name="image"
            type="url"
            placeholder="Imagen"
            onChange={(event) => setImage(event.target.value)}
            value={image}
          />
        </label>
        <label>
          Nombre
          <input
            name="Nombre"
            type="text"
            placeholder="Nombre del plato"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </label>
        <label>
          Calorias
          <input
            name="calorias"
            type="number"
            placeholder="calorias"
            onChange={(event) => setCalories(event.target.value)}
            value={calories}
          />
        </label>
        <label>
          Raciones
          <input
            name="raciones"
            type="text"
            placeholder="raciones"
            onChange={(event) => setRaciones(event.target.value)}
            value={raciones}
          />
        </label>
        <button type="submit"> Agregar receta </button>
      </form>
    </div>
  );
}

export default Editar