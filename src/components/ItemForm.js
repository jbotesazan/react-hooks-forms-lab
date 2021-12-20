import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onNewItemChange, newItem, newItemCategory, onSetNewItemCategory, items, setItems}) {

// console.log(onItemFormSubmit)

    function onItemFormSubmit (e) {
    e.preventDefault();

    const freshItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: newItem,
      category: newItemCategory,
    }
    setItems([...items, freshItem]);
  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItem} onChange={onNewItemChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={newItemCategory} onChange={onSetNewItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

// Take a look at how to get the new items to show up on the App.