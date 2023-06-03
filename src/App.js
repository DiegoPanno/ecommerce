import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./Contex/CarritoContext";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/:idCategoria" element={<ItemListConteiner />} />
          <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={ <h2>Error 404</h2> } />
        </Routes>
        <Footer />
      </CarritoProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
