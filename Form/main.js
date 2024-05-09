const form = document.getElementById("form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");

form.addEventListener("submit", submit);

function submit(e) {
  e.preventDefault();

  const hasError = validateInputs();

  if (!hasError) {
    let data = {};

    data.name = userName.value.trim();
    data.email = email.value.trim();
    data.phone = phone.value.trim();
    data.password = password.value.trim();
    data.rePassword = rePassword.value.trim();

    console.log(data);
    alert("Form submitted successfully with the following details:\n\n" + JSON.stringify(data, null, 2));
  } else {
    alert("Error in your form. Please check the highlighted fields.");
  }
}

const setError = (id, message) => {
  const errorMessage = document.getElementById(`${id}`);
  //access the sbling of errorMessage element
  const inputElement = errorMessage.previousElementSibling;

  inputElement.classList.add("error");
  inputElement.classList.remove("success");
  // console.log("input elemet ===",inputElement.classList)
  errorMessage.innerHTML = message;
};

const setSuccess = (id) => {
  const errorMessage = document.getElementById(`${id}`);
  //access the sbling of errorMessage element
  const inputElement = errorMessage.previousElementSibling;

  inputElement.classList.remove("error");
  inputElement.classList.add("success");

  errorMessage.innerHTML = "";
};

const emailCheck = () => {
  let emailValue = email.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    setError("emailError", "Invalid email!");
    return false;
  } else {
    setSuccess("emailError");
    return true;
  }
};

const phoneNumberCheck = () => {
  let phoneValue = phone.value.trim();

  // Regular expression for a 10-digit phone number
  const phoneRegex = /^\d{10}$/;

  if (!phoneRegex.test(phoneValue)) {
    setError("phoneError", "Invalid phone number! Must be 10 digits");
    return false;
  } else {
    setSuccess("phoneError");
    return true;
  }
};

const reEnterPasswordCheck = () => {
  let passwordValue = password.value.trim();
  let reEnterPasswordValue = rePassword.value.trim();

  if (passwordValue != "") {
    if (passwordValue === reEnterPasswordValue) {
      setSuccess("re-passwordError");
      return true;
    } else {
      setError("re-passwordError", "Not matching previuse password!");
      return false;
    }
  } else {
    setError("re-passwordError", "Re enter the password!");
  }
};

const validateInputs = () => {
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const rePasswordValue = rePassword.value.trim();

  let hasErrors = false;

  if (userNameValue == "") {
    setError("userNameError", "User name is Required!");
    hasErrors = true;
  } else {
    setSuccess("userNameError");
  }

  if (emailValue == "") {
    setError("emailError", "Email is Required!");
    hasErrors = true;
  } else {
    emailCheck() || (hasErrors = true);
  }

  if (phoneValue == "") {
    setError("phoneError", "Phone number  is Required!");
    hasErrors = true;
  } else {
    phoneNumberCheck() || (hasErrors = true);
  }

  if (passwordValue == "") {
    setError("passwordError", "Password is Required!");
    hasErrors = true;
  } else {
    setSuccess("passwordError");
  }

  if (rePasswordValue == "") {
    setError("re-passwordError", "Re enter the password!");
    hasErrors = true;
  } else {
    reEnterPasswordCheck() || (hasErrors = true);
  }

  return hasErrors;
};
