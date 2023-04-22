import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import Carrusel from "./components/Carrusel/Carrusel";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting={"Bienvenidos a Tienda libre de gluten"} />
      <Carrusel
        imagen1="imgcarrusel1"
        nombre1="Imagen uno"
        imagen2="imgcarrusel2"
        nombre2="Imagen dos"
        imagen3="imgcarrusel3"
        nombre3="Imagen tres"
      />
    </div>
  );
}

export default App;
