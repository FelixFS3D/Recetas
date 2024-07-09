
import logo from '../assets/Images/Gorro.png'
function HomePage() {

  return (
    <div>
       <nav className="navBar">
        <h1>COCINA CON SABOR</h1>
        <img src={logo} alt="" width={"80px"}/>
        </nav> 

        

        <aside className="aside"><br /><a href="" >Pagina de inicio</a><br/><a href="">About</a></aside>

        <footer className="footer"><a href="https://github.com/FelixFS3D/Recetas.git">Repositorio GitHub</a></footer>
    </div>
  )
}

export default HomePage