import { useState } from "react"
import { db } from "./data/db"
import Guitar from "./components/Guitar/Guitar"
import Header from "./components/Header/Header"

function App() {
  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  const MAX_ITEMS = 3;
  const MIN_ITEMS = 1;

  function addToCart(item){
    const itemExists = cart.findIndex(guitar => guitar.id == item.id)
    if (itemExists < 0) {
      item.quantity = 1 
      setCart([...cart, item])
    }
    else {
      if (cart[itemExists].quantity >= MAX_ITEMS) return
        const updatedCart = [...cart]
        updatedCart[itemExists].quantity++
        setCart(updatedCart)
    }
  }

  function decreaseQuantity(id){
    console.log('-1 producto...');
  }
  
  function increaseQuantity(){
    console.log('+1 producto...');
  }

  function emptyCart(){
    setCart([])
  }

  return (
    <>
      <Header
      cart={cart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      emptyCart={emptyCart}
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
