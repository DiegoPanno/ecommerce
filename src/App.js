import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import Carrusel from "./components/Carrusel/Carrusel";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Carrusel
          imagen1="imgcarrusel1"
          nombre1="Imagen uno"
          imagen2="imgcarrusel2"
          nombre2="Imagen dos"
          imagen3="imgcarrusel3"
          nombre3="Imagen tres"
        />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/:idCategoria" element={<ItemListConteiner />} />
          <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
