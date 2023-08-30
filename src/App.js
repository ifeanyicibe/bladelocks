import ProductCard from "./ProductCard";

const products = [
  {
    id: 0,
    name: "Shampoo",
    price: "$25",
    category: "hair",
  },
  {
    id: 1,
    name: "Body Wash",
    price: "$20",
    category: "body",
  },
  {
    id: 2,
    name: "Tote Bag",
    price: "$15",
    category: "apparel",
  },
];

function App() {
  return (
    <div>
      <h1>BladeLocks Products</h1>
      {products.map((item) => ( <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default App;
