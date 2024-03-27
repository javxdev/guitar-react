import { userCart } from "./hooks/userCart"

import Guitar from "./components/Guitar"
import Header from "./components/Header"

function App() {
  const { data, cart, addToCart, removeFromCart, decreaseQuantity, 
          increaseQuantity, emptyCart, cartTotal, isEmpty } = userCart()

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        emptyCart={emptyCart}
        cartTotal={cartTotal}
        isEmpty={isEmpty}
      />

      <h1 className="py-5 md:pt-10 text-yellow-500 font-bold text-5xl text-center">Nuestra Colección</h1>
      <main className="grid md:grid-cols-2 gap-y-20 max-w-4xl mx-auto px-5 py-10 ">
        
        {data?.map((guitar) => (
          <Guitar 
            key={guitar.id} 
            guitar={guitar}
            addToCart={addToCart}
          />
          ))}

      </main>
    </>
  )
}

export default App
