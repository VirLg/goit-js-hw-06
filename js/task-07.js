// завдання 7

{/* <input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */}


const task7 = document.body;
const inputRemoveSize = `
<h2>Task7</h2>
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> 
`
task7.insertAdjacentHTML('beforeend',inputRemoveSize)


const refs = {
  
  spanRef:document.querySelector('#text'),
}


const imputRef = document.querySelector('#font-size-control');
 imputRef.addEventListener('change', onSizeSpan)

function onSizeSpan(evn) { 
  let a = evn.currentTarget.value;
  return refs.spanRef.style.fontSize = `${a}px`
  
}