// // Порахував і вивев в консоль кількість категорій
// function fnA() { 
//     const allCategories = [...categories.children].length;
// return `Number of categories : ${allCategories}`;
    
// }
// console.dir(fnA());
// // ========================================
// кількість елементів в категорії

// function fnB() { 
//   // // отримать ul item
// const allElement = [...document.querySelectorAll('.item')]
// // перебрав ul та вивев окремо єлементи масиву
//     for (const el of allElement) { 
//     console.log(el.children[0].textContent);
//     console.log(el.children[1].children.length); 
// }  
// }
// console.dir(fnB());

// завдання 2



const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemRef = document.createElement("ul");
  itemRef.id = "#ingredients"

const coookListEl = ingredients.map(ingredient => { 
  
  const coookList = document.createElement('li')
  coookList.classList.add("item")
  coookList.textContent = ingredient 
  
  return coookList
})

itemRef.append(...coookListEl)

const add = document.querySelector("body")


add.insertBefore(itemRef, add.children[2])

console.log(add);



// завдання 3



const gallaryItem = document.createElement("ul")
gallaryItem.classList.add("gallery");

console.log(gallaryItem);

