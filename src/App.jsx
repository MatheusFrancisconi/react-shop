import Header from "./components/Header";
import ProductItem from "./components/ProductItem";
import Cart from "./components/Cart";
import { products } from "./data/products";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === productToAdd.id,
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...productToAdd, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartCount={totalItems} onOpenCart={() => setIsCartOpen(true)} />

      <main className="p-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Nossos Produtos
        </h2>
        <p className="text-gray-600 mb-8">
          Temos {products.length} produtos disponíveis
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onAddtoCart={handleAddToCart}
            />
          ))}
        </div>
      </main>

      {isCartOpen && (
        <Cart
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={handleRemoveFromCart}
        />
      )}
    </div>
  );
}
