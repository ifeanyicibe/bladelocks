
function ProductCard(props) {
  return (
    <div className="bg-light border p-4 m-2">
      <h4>{props.product.name}</h4>
      <p>{props.product.price}</p>
      <p>{props.product.category}</p>
    </div>
  )
}

export default ProductCard
