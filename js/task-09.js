function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const task9 = document.body



const murkupButton = `
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
`

task9.insertAdjacentHTML('beforeend', murkupButton)
const buttonRef = document.querySelector('.change-color')
const getColor = document.querySelector('.color')

console.log();


console.dir(task9);
buttonRef.addEventListener('click', onClick)
function onClick(evn) {
  
  task9.style.backgroundColor = getRandomHexColor();
getColor.textContent = task9.style.backgroundColor
  // console.log(getColor.textContent);
 }

















