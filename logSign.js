const container = document.querySelector('.container');
const LOrSBtn = document.querySelector('.loginOrSignup')
let loginBoolean = false
const displayFunction = () => {
    loginBoolean ? LOrSBtn.innerHTML = `<div id="a">Don't have an account? Sign Up</div>` : LOrSBtn.innerHTML = `<div id="a">Have an account? Login</div>`  //true -> then-->else

    loginBoolean ? container.innerHTML += `<div id="login"><h1>Instagram</h1>
<input id="email" type="email" placeholder="Email">
<input id="password" type="password" placeholder="Password">
<button class="Btn">Login</button>
</div>`: container.innerHTML += ` <div id="login"><h1>Instagram</h1>
<input id="name" type="text" placeholder="Name">
<input id="email" type="email" placeholder="Email" >
<input  id="password" type="password" placeholder="Password">
<button class="BTN">Signup</button><br>
<div id="abc"><hr>or</hr><hr></hr></div><br>
<div id="lastheading"><h2>Log in with facebook</h2>
<h3>Forgotton your password</h3></div></div><h5>Get the app</h5>`
}
displayFunction()
LOrSBtn.addEventListener('click', () => {
    loginBoolean = !loginBoolean
    //loginBoolean = true
    //true=!true=false
    container.innerHTML=''
    displayFunction()
})