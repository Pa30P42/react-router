import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to={`/products/1`}>
            <h3>Vacuum cleaner</h3>
            <p>30$</p>
          </Link>
        </li>
        <li>
          <Link to={`/products/2`}>
            <h3>Toster</h3>
            <p>20$</p>
          </Link>
        </li>
        <li>
          <Link to={`/products/3`}>
            <h3>Trimmer</h3>
            <p>13$</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
