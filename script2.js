const password = "1234567890000";
password.length >= 12
  ? console.log("password is very strong so WELCOME!!!")
  : password.length >= 8
  ? console.log("WELCOME!!!")
  : console.log("Sorry!!! The password is too short");
