// Toggle between login and Signup

const signupBtn = document.querySelector(".signUpBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");

const signup = document.querySelector(".Signup");
const display = document.querySelector(".loginForm");
const login = document.querySelector(".login");
const midFormContainer = document.querySelector(".middleFormContainer");


loginBtn.addEventListener("click", ()=>{
  moveBtn.classList.add('rightBtn');
  login.classList.add("loginForm");
  signup.classList.remove("signUpForm");
  moveBtn.innerHTML = 'Login';
  login.style.display="block";
  midFormContainer.style.height = "60vh";
})

signupBtn.addEventListener("click",  ()=> {
  moveBtn.classList.remove("rightBtn");
  login.classList.remove("loginForm");
  signup.classList.add("signUpForm");
  moveBtn.innerHTML = 'Signup';
  login.style.display="none";
  midFormContainer.style.height = "90vh";
})


/* Validate the user details */

// validate login details

function validate_login() {

   let loginPwd = document.getElementById("login_pwd");

   let loginEmail = document.getElementById("login_Email").value;

   let regx = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;

  if(!regx.test(loginEmail)){
    alert("Invalid Email Id")
    loginEmail.focus;
    loginEmail.style.border = "solid 3px #F37878";
    loginEmail.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    return false;
    
  }
  else if(loginPwd.value.trim()==""){
    alert("No blanks allowed");
    loginPwd.style.border = "solid 3px #F37878";
    loginPwd.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    return false;
  }
  else if(loginPwd.value.trim().length<8){
    alert("password must be more than 8 characters");
    loginPwd.style.border = "solid 3px #F37878";
    loginPwd.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    return false;
  }
  else if(loginPwd.value.trim().length>12){
    alert("password must not be more than 12 characters");
    loginPwd.style.border = "solid 3px #F37878";
    loginPwd.style.boxShadow = "2px 2px 3px #224B0C ,  2px 2px 3px #F37878";
    return false;
  }
  else{
    alert("Login Successfull");
    true;
  }

}


// Validate Signup details.

function validate_signUp() {
  let firstName = document.getElementById("fName");

  let lastName = document.getElementById("lName");

  let password = document.getElementById("pwd");

  let cPassword = document.getElementById("cpwd");

  let signUpEmail = document.getElementById("Email").value;

  let regx1 =/^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;

  
if(!regx1.test(signUpEmail)){
    alert("Invalid email id")
    signUpEmail.focus;
    return false;
    
  }  
  else if(firstName.value.trim()==""){
    alert("No blanks allowed");
    firstName.style.border = "solid 3px #F37878";
    firstName.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    return false;
  }
  else if(lastName.value.trim()==""){
    alert("No blanks allowed");
    lastName.style.border = "solid 3px #F37878";
    lastName.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    return false;
  }
  else if(password.value.trim()==""){
    alert("No blanks allowed");
    password.style.border = "solid 3px #F37878";
    password.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    return false;
  }
  else if(cPassword.value.trim()==""){
    alert("No blanks allowed");
    cPassword.style.border = "solid 3px #F37878";
    cPassword.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    return false;
  }
  else if(password.value.trim().length<8){
    alert("password must be more than 8 characters");
    password.style.border = "solid 3px #F37878";
    password.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    return false;
  }
  else if(password.value.trim().length>12){
    alert("password must not be more than 12 characters");
    password.style.border = "solid 3px #F37878";
    password.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    return false;
  }
  else if(cPassword.value.trim().length<8){
    alert("confirm password must be more than 8 characters");
    cPassword.style.border = "solid 3px #F37878";
    cPassword.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    return false;
  }
  else if(cPassword.value.trim().length>12){
    alert("confirm password must not be more than 12 characters");
    cPassword.style.border = "solid 3px #F37878";
    cPassword.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    return false;
  }
  else if(password.value.trim().length != cPassword.value.trim().length){
    alert("Passwords are not matching");
    password.style.border = "solid 3px #F37878";
    password.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    cPassword.style.border = "solid 3px #F37878";
    cPassword.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    return false;
  }
  else if(password.value.trim() != cPassword.value.trim()){
    alert("Passwords are not matching");
    password.style.border = "solid 3px #F37878";
    password.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    cPassword.style.border = "solid 3px #F37878";
    cPassword.style.boxShadow = "2px 2px 3px #F37878 ,  2px 2px 3px #F37878";
    return false;
  }
  else{
    alert("Signup Successfull");
    true;
  }
}
