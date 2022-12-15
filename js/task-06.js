// завдання 6





const task6 = document.body
const inputRef = document.querySelector("#validation-input")

const validationLength = inputRef.dataset.length



inputRef.addEventListener('blur', onImputBlur)


let a = inputRef.dataset.length;



function onImputBlur(evn) {
  if ((evn.currentTarget.value).length <= `${validationLength}`) {
    
    addClass((evn.currentTarget.value).length)
    
  } else { 
   
    addClass((evn.currentTarget.value).length)
  
  }

}

function addClass(b) {
  
 
  if (b>=a) {
      inputRef.classList.remove('invalid')
    inputRef.classList.add('valid')
 
  } else { 
   
       inputRef.classList.add('invalid')
    inputRef.classList.remove('valid')
  
  }
}




