function validate(){
    let username = document.getElementById('username').
    value;
    let password = document.getElementById('password').
    value;
    if(username=null || username=="")
    {
      alert("Enter your username");
      return false;
    }
    if(password.length<=5)
    {
      alert("Valid password required.");
      return false;
    }
    else{
      alert("Login successful.");
      return true;
    }
  }