
import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [items, setItems] = useState([]);
  const [dogStatus, setDogStatus ] = useState(false);
  const [clickDog, setClickDog] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);

 console.log(items);
 
 


  return (
    <>
      <Header />
      <PizzaForm  />
      <PizzaList  items={items}/>
    </>
  );
}

export default App;
