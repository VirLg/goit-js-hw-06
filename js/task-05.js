// завдання 5

const task5 = document.body;

const murkupInput = `
<h2>Task5</h2>
 <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
`
task5.insertAdjacentHTML('beforeend',murkupInput)

const inputRef = document.querySelector('#name-input')
inputRef.addEventListener('input', onInput)
const outputRef = document.querySelector('#name-output')
function onInput(evn) { 
    (!inputRef.value) ? outputRef.textContent = "Anonymous": outputRef.textContent = evn.currentTarget.value
     
    }
    

