// завдання 6


const task6 = document.body;
const inputMarkupFocus = `
<h2>Task6</h2>
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
  <h1 class="add">HYFJKK</h1>
`
task6.insertAdjacentHTML('beforeend', inputMarkupFocus)


const refs = {
  inputMarkupRef: document.querySelector('#validation-input')
  
}

const validationLength = refs.inputMarkupRef.dataset.length;

// refs.inputMarkupFocusRef.addEventListener('input', onInputFocus)



refs.inputMarkupRef.addEventListener('blur', onImputBlur)

function onImputBlur(evn) {
  if ((evn.currentTarget.value).length < `${validationLength}`) {
    refs.inputMarkupRef.style.borderColor = 'red'
  } else {
    refs.inputMarkupRef.style.borderColor = 'green'
  }
}
