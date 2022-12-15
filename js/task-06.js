// завдання 6





const task6 = document.body
const inputRef = document.querySelector("#validation-input")

const validationLength = inputRef.dataset.length



inputRef.addEventListener('blur', onImputBlur)


let a = 6;


function onImputBlur(evn) {
  if ((evn.currentTarget.value).length < `${validationLength}`) {
    
    a = addClass((evn.currentTarget.value).length)
    
  } else { 
   
    a = addClass((evn.currentTarget.value).length)
  
  }

}

function addClass() {
  
 
  if (!a) {
      inputRef.classList.remove('invalid')
    inputRef.classList.add('valid')
 
  } else { 
   
       inputRef.classList.add('invalid')
    inputRef.classList.remove('valid')
  
  }
}




