// -------------------------------------- DataBase ------------------------------------------
usersJson = [
  {
    id: 0,
    username: "lamis",
    email: "lamis@gmail.com",
    password: "lamislamis",
  },
  {
    id: 1,
    username: "mouna",
    email: "mouna@gmail.com",
    password: "mounamouna",
  },
  {
    id: 2,
    username: "ahmed",
    email: "ahmed@gmail.com",
    password: "ahmedahmed",
  },
];

localStorage.users = JSON.stringify(usersJson);
var USERS = JSON.parse(localStorage.users);

// -------------------------------------- SIGN IN ------------------------------------------

const EMAIL = document.querySelector(".email input");
const emailValidation = document.querySelector(".emailValidation");
const PASSWORD = document.querySelector(".password input");
const passwordValidation = document.querySelector(".passwordValidation");
const signInForm = document.querySelector("form#signIn");

function validationEmail() {
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var EMAILvalue = EMAIL.value;
  if (EMAILvalue.match(emailformat)) {
    emailValidation.style.display = "none";
    document.querySelector(".email").style.cssText = "border-bottom: none;";
    return true;
  } else {
    emailValidation.style.display = "block";
    document.querySelector(".email").style.cssText =
      "border-bottom: 2px solid darkorange;";
    return false;
  }
}

function validationPassword() {
  var PASSWORDvalue = PASSWORD.value;
  if (PASSWORDvalue.length > 3 && 60 > PASSWORDvalue.length) {
    passwordValidation.style.display = "none";
    document.querySelector(".password").style.cssText = "border-bottom: none;";
    return true;
  } else {
    passwordValidation.style.display = "block";
    document.querySelector(".password").style.cssText =
      "border-bottom: 2px solid darkorange;";
    return false;
  }
}

function signInFunction() {
  const user = USERS.find((user) => user.email === EMAIL.value);
  console.log(user);
  if (user) {
    if (user.password === PASSWORD.value) {
      alert("Welcome back <3");
      return true;
    } else {
      alert("Password is incorrect");
      //reset the password field
      PASSWORD.value = "";
      return false;
    }
  } else {
    alert("Your Email is incorrect");
    //reset the form
    EMAIL.value = "";
    PASSWORD.value = "";
    return false;
  }
}

EMAIL.addEventListener("input", validationEmail);
PASSWORD.addEventListener("input", validationPassword);
signInForm.addEventListener("submit", signInFunction);

const learnMore = document.querySelector("#learnMore");
const learnMoreDetail = document.querySelector("#learnMoreDetail");

learnMore.addEventListener("click", () => {
  learnMore.style.display = "none";
  learnMoreDetail.style.display = "block";
});
