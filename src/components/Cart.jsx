export default function Cart({ cart, onClose, onRemoveItem }) {
  // ESTADO DERIVADO: Calculando o valor total em Dinheiro
  // Multiplicamos o preço daquele item pela quantidade que o usuário escolheu
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    // Fundo escuro semitransparente (Overlay)
    <div className="fixed isent-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4 z-50 rounded-br-2xl rounded-tr-2xl text-gray-500">
      // Caixa em branco
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 transition-colors duration-200 hover:bg-red-500 hover:text-white font-bold text-lg"
        >
          X
        </button>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Seu Carrinho</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            Seu carrinho está vazio.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.image}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      Qtd: {item.quantity}
                    </p>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-white text-xs font-semibold mt-1 transition-colors tracking-wider border p-1 rounded-lg bg-red-700 cursor-pointer hover:scale-105 transition-transform "
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex justify-between items-center text-xl">
          <span>Total:</span>
          <span className="text-green-600 font-bold">
            R$ {totalPrice.toFixed(2)}
          </span>
        </div>

        <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors cursor-pointer">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
