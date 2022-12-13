// завдання 6





const task6 = document.body
const inputRef = document.querySelector("#validation-input")

const validationLength = inputRef.dataset.length



inputRef.addEventListener('blur', onImputBlur)

function onImputBlur(evn) {
  if ((evn.currentTarget.value).length < `${validationLength}`) {
     inputRef.classList.add('invalid')
    
  } else {
    inputRef.classList.replace('invalid', "valid")

  }
}




