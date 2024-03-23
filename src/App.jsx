
import Guitar from "./components/Guitar";
import { db } from "./data/db";
import { useState } from "react";

function App() {
  const [data, setData] = useState(db)
  console.log(data);
  return (
    <>
      <h1 className="py-5 md:pt-10 text-yellow-500 font-bold text-5xl text-center">Nuestra Colección</h1>
      <div className="grid md:grid-cols-2 gap-y-20 max-w-4xl mx-auto px-5 py-10 ">
        
        {data && data.map((guitar) => (
        <Guitar 
          key={guitar.id} 
          guitar={guitar}
        />
        ))}
      </div>
    </>
  )
}

export default App
