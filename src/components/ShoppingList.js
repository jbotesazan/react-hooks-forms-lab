import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Produce');
  const [newItem, setNewItem] = useState('');


  function onSetNewItemCategory (e) {
    setNewItemCategory(e.target.value);
  }

  function onNewItemChange (e) {
    setNewItem(e.target.value);
  }

  function onSearchChange (e) {
    setSearchItem(e.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    let itemNorm = item.name.toLowerCase();
    let query = searchItem.toLowerCase();

    if (selectedCategory === "All" && query.length <= 0) return true; // Case 1: we aren't filtering by substring and the category is All
    else if (selectedCategory === "All" && query.length > 0) {
      return itemNorm.indexOf(query) !== -1; //Case 2: We are filtering by substring and category is All
    }
    else if (query.length > 0){
        return (item.category === selectedCategory) && (itemNorm.indexOf(query) !== -1) // Case 3: We are filtering by substring and category is something specific
    }   
    return item.category === selectedCategory; // Case 4: We are just filtering by category
  });

  return (
    <div className="ShoppingList">
      <ItemForm onNewItemChange={onNewItemChange} newItem={newItem} newItemCategory={newItemCategory} onSetNewItemCategory={onSetNewItemCategory} items={items} setItems={setItems} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} searchItem={searchItem}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
