import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Mission from "./components/Mission";

function App() {
  return (
    <main>
      <header>
        <nav>
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
