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

// const itemRef = document.createElement("ul");
//   itemRef.id = "#ingredients"

// const coookListEl = ingredients.map(ingredient => { 
  
//   const coookList = document.createElement('li')
//   coookList.classList.add("item")
//   coookList.textContent = ingredient 
  
//   return coookList
// })

// itemRef.append(...coookListEl)

// const addIngredients = document.querySelector("body")


// addIngredients.insertBefore(itemRef, addIngredients.children[2])

// console.log(addIngredients);



// завдання 3

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];



// const gallaryListRef = document.createElement("ul")
// gallaryListRef.classList.add("gallery");



// const creataGallaryRef = images.map(image => {
//  const gallaryItemRef = document.createElement("li")
//   gallaryItemRef.classList.add("gallary__item")

//   const gallaryImgRef = document.createElement("img")
//   gallaryImgRef.classList.add("gallary__item-pic")
//   gallaryImgRef.src = image.url
//   gallaryImgRef.alt = image.alt
//   gallaryItemRef.append(gallaryImgRef)
  
//   return gallaryItemRef
 


// })
// gallaryListRef.append(...creataGallaryRef)

// const addImages = document.querySelector("body")


// addImages.insertBefore(gallaryListRef, addImages.children[3])



// console.log(addImages);
 
// console.log(gallaryListRef);
// console.log(gallaryItemRef);



// завдання 4


{/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */}


// const task4 = document.body

// const markupCounter = `
//  <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div> 

// `
// task4.insertAdjacentHTML('afterbegin', markupCounter)

// let counterValue = document.querySelector('#value')



// const btnHello = document.querySelector('.add')

// function onBtnClick(evn) { 
// console.log(evn.currenTarget);
// }

// const btnDecrementRef = document.querySelector('button[data-action="decrement"]')
// const btnIncrementRef = document.querySelector('button[data-action="increment"]')



// btnDecrementRef.addEventListener('click',onClickDecrement)
// function onClickDecrement(evn) {
// counterValue.textContent = Number(counterValue.textContent)-1     
// }
// btnIncrementRef.addEventListener('click',onClickIncrement) 
// function onClickIncrement(evn) {
// counterValue.textContent = Number(counterValue.textContent)+1     
//  }




// завдання 5

// const task5 = document.body;

// const murkupInput = `
//  <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
// `
// task5.insertAdjacentHTML('afterbegin',murkupInput)

// const inputRef = document.querySelector('#name-input')
// inputRef.addEventListener('input', onInput)
// const outputRef = document.querySelector('#name-output')
// function onInput(evn) { 
// outputRef.textContent = evn.currentTarget.value

// }


// завдання 6


// const task6 = document.body;
// const inputMarkupFocus = `
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
//   <h1 class="add">HYFJKK</h1>
// `
// task6.insertAdjacentHTML('afterbegin', inputMarkupFocus)


// const refs = {
//   inputMarkupRef: document.querySelector('#validation-input')
  
// }

// const validationLength = refs.inputMarkupRef.dataset.length;

// // refs.inputMarkupFocusRef.addEventListener('input', onInputFocus)



// refs.inputMarkupRef.addEventListener('blur', onImputBlur)

// function onImputBlur(evn) {
//   if ((evn.currentTarget.value).length < `${validationLength}`) {
//     refs.inputMarkupRef.style.borderColor = 'red'
//   } else {
//     refs.inputMarkupRef.style.borderColor = 'green'
//   }
// }


// завдання 7

{/* <input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */}


// const task7 = document.body;
// const inputRemoveSize = `
// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span> 
// `
// task7.insertAdjacentHTML('afterbegin',inputRemoveSize)


// const refs = {
  
//   spanRef:document.querySelector('#text'),
// }


// const imputRef = document.querySelector('#font-size-control');
//  imputRef.addEventListener('change', onSizeSpan)

// function onSizeSpan(evn) { 
//   let a = evn.currentTarget.value;
//   return refs.spanRef.style.fontSize = `${a}px`
  
// }



{/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form> */}

const task8 = document.body;
const markupForm = `<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>`

task8.insertAdjacentHTML('afterbegin', markupForm);
const formEl = document.querySelector(".login-form")

formEl.addEventListener('submit', onFormSubmit)

// function onImput() { 
//   if()
// }



/**збирає данні форми
 * 
 * @param {*evn} evn 
 */

function onFormSubmit(evn) {
  evn.preventDefault();
  
  const email = evn.currentTarget.elements.email.value
  const password = evn.currentTarget.elements.password.value
  const dataForm = { email, password }
  console.log(dataForm);
  

  // const formDataPatern = new FormData(evn.currentTarget)
  // formDataPatern.forEach((value, name) => {
  //   console.log({value,name});
// }
  }







