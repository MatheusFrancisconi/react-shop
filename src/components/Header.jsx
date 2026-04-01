export default function Header({ cartCount, onOpenCart }) {
  return (
    <header className="bg-gray-500 text-white p-5 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">React Shop 🛒</h1>

      <button
        onClick={onOpenCart}
        className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg font-semibold"
      >
        <span>Carrinho: </span>
        <span className="bg-white text-blue-600 px-2 rounded-lg">
          {cartCount}
        </span>
      </button>
    </header>
  );
}
