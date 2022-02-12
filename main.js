function validateinput(){
    //Create references to the input elements
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    //Check if username field is empty
    if(username.value == ""){
          alert("Please enter the username");
          username.focus();
          return false;
    }
   //Check if password field is empty
    if(password.value == ""){
          alert("Please enter the password");
          password.focus();
          return false;
    }
    //Check if the password length is between 6 to 14 characters
    if(!((password.value.length>=6) && (password.value.length<=14))){
        alert("Enter a password of length 6 to 14 characters");
        password.focus();
        return false;
    }
    alert("Login Successful, username and password are validated");
    //If all is well return true.
    return true;
}