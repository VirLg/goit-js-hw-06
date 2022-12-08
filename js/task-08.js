// завдання 8

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
const markupForm = `
<h2>Task8</h2>
<form class="login-form">
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

task8.insertAdjacentHTML('beforeend', markupForm);
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
 
  if (!email || !password) { 
    alert("заповніть форму")
    return
  }
  console.log(dataForm);
  
  // const formDataPatern = new FormData(evn.currentTarget)
  // formDataPatern.forEach((value, name) => {
  //   console.log({value,name});
// }
  }


