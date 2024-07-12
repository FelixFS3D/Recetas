import logo from "../assets/Images/Logo1.png";
import Recetas from "./Recetas.jsx";
function HomePage() {
  return (
    <div>
      <nav className="navBar">
        <h1>COCINA CON SABOR</h1>
        <img src={logo} alt="" width={"70px"} />
      </nav>
      <div className="container">
        <aside className="aside">
          <br />
          <a href="/">Pagina de inicio</a>
          <br />
          <a href="">About</a>
        </aside>

      </div>
    </div>
  );
}

export default HomePage;
