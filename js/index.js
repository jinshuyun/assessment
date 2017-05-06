 function checkForm()
  {
    var num1 = /^[0-9]{10}$/;
    var num2 = /^\({1}([0-9]{3})\){1}[ ]([0-9]{3})[-]([0-9]{4})$/;
    var num3 = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;

    if(!document.getElementById("phone").value.match(num1)&&!document.getElementById("phone").value.match(num2)&&!document.getElementById("phone").value.match(num3)) {
      document.getElementById("phone").style.border = "1px solid red";
      document.getElementById("phonelb").innerHTML = "* Phone Number - invalid phone number";
      document.getElementById("phonelb").style.color = "red";
      document.getElementById("phone").style.backgroundColor = "#fbdbe3";
      document.getElementById("phone").style.color = "red";
      document.getElementById("phone").focus;
      return false;
    }

    document.getElementById("help").innerHTML = "<div id='tk'>Thank you!</div><div id='info'>Your information was submitted successfully. We will now connect you to the next available chat agent.</div>"
    
    return true;
  }
