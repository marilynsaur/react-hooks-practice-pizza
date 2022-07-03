import React from "react";

function Pizza(allThePizzas) {
  console.log(allThePizzas)
  return (
    <tr>
      <td>{allThePizzas.toppings}</td>
      <td>{allThePizzas.size}</td>
      <td>{allThePizzas.vegetarian}</td>
      <td>
        <button type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
