import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenido a miTienda" />}
        />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer greeting="Bienvenido a miTienda" />}
        />
        <Route path="*" element={<h4>Error 404: Page not found</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
