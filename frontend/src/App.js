import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    
      <div className="container">
        <div className="column">
          <div className="column is-half is-offset-one-quarter">
          <Routes>
              <Route path="/" element = { < ProductList />} />
              <Route path="/add" element = {< AddProduct />} />
              <Route path="/edit/:id" element = {< EditProduct />} />
          </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
