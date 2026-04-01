export default function ProductItem({ product, onAddtoCart }) {
  return (
    <div className="bg-white p-6 rounded-xl flex flex-col items-center transition-transform hover:scale-105">
      <div className="text-6xl mb-4">{product.image}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {product.name}
      </h3>
      <span className="text-lg text-green-600 font-bold mb-4">
        R$ {product.price.toFixed(2)}
      </span>
      <button
        onClick={() => onAddtoCart(product)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors cursor-pointer"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
