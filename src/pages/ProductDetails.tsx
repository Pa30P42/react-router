import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <div>
      ProductDetails
      <h1>ID - {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
