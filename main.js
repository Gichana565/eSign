//Setting the login form value
//variable = document.getElementById()
//id is for the login form created
const loginForm = document.getElementById("login");

//Submitting process
//Insert the id of the submit button from the form
const submitButton = document.getElementById("submit");

//Adding an event listener to the submit button
//e takes the event that is happening
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  //making a var
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  console.log(email);
  console.log(password);
  //Adding conditionals to check the validity of input email length and password length as well as the correct values that are required
  if (email.length == 0) {
    return alert(`Name is required.`);
  }else if (password.length < 5) {
    return alert(`Password length should be more than 5`);
  }else if (email === "johndoe@gmail.com" && password === "123456") {
    alert("Welcome to eSign Web app!");
  } else {
    alert("Email and Password not valid.");
  }
});
