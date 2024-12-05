import { useParams } from "react-router";

function ProductDetail() {
  const { id } = useParams();

  return(
    <div>
      <h1>Product Detail</h1>
      <p>Displaying details for product ID: {id}</p>
    </div>
  )
}

export default ProductDetail;
