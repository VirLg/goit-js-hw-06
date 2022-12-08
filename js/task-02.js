const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// завдання 2



// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];



const itemRef = document.createElement("ul");
  itemRef.id = "#ingredients"

const coookListEl = ingredients.map(ingredient => { 
  

  const coookList = document.createElement('li')
  coookList.classList.add("item")
  coookList.textContent = ingredient 
  
  return coookList
})

itemRef.append(...coookListEl)

const addIngredients = document.querySelector("body")


addIngredients.insertBefore(itemRef, addIngredients.children[3])

console.log(addIngredients);