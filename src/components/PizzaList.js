import React from "react";
import Pizza from "./Pizza";

function PizzaList({items}) {
  console.log(items)
  const pizzaItems = items.map(pizza =>  <Pizza  allThePizzas={pizza} key={pizza.id} />);
  
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
      <Pizza pizzaitems={pizzaItems}/>
        </tbody>
    </table>
  );
}

export default PizzaList;
