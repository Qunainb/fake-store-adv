export default function Product({ product }) {
  return (
    <div className="w-full h-[300px] bg-pink-200" key={product.id}>
      {product.title}
    </div>
  );
}
