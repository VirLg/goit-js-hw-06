const task4 = document.body

const markupCounter = `
<h2>Task4</h2>
 <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> 

`
task4.insertAdjacentHTML('beforeend',markupCounter)

let counterValue = document.querySelector('#value')



const btnHello = document.querySelector('.add')

function onBtnClick(evn) { 
console.log(evn.currenTarget);
}

const btnDecrementRef = document.querySelector('button[data-action="decrement"]')
const btnIncrementRef = document.querySelector('button[data-action="increment"]')



btnDecrementRef.addEventListener('click',onClickDecrement)
function onClickDecrement(evn) {
counterValue.textContent = Number(counterValue.textContent)-1     
}
btnIncrementRef.addEventListener('click',onClickIncrement) 
function onClickIncrement(evn) {
counterValue.textContent = Number(counterValue.textContent)+1     
 }