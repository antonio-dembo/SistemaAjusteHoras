
(function () {
  
  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          console.log("IN CHECK VALIDITY!!!")          
        }
        else
        {          
          const emailInput = form.elements.email;
          const passwordInput = form.elements.password;
    
          console.log(emailInput.value, passwordInput.value );
          
          if (!isValidEmail(emailInput.value))
          {
            event.preventDefault();
            const msg = "O e-mail informado para autenticação, não é um e-mail válido.";
            addInvalidEmailPassword(form , msg);
            console.log("INVALID EMAIL!!");
            return false;
          }

          if(!isValidEmail(passwordInput.value))
          {
            event.preventDefault()
            const msg = "O e-mail informado para autenticação, não é um e-mail válido.";
            addInvalidEmailPassword(form , msg)
            console.log("INVALID PASSWORD")
            return false;
          }

          const invalidEmailPassword = document.querySelector("#invalidEmailPassword");

          if(invalidEmailPassword !== null)
          {
            invalidEmailPassword.style.display = "none";
          }            
          
          console.log("NOW CAN SEND FORM!!!")
        }

        form.classList.add('was-validated')
        
      }, false)
    }
  )
})()


const addInvalidEmailPassword = (form , msg) => 
{
  if(document.querySelector("#invalidEmailPassword") === null)
  {
    const newdiv= document.createElement('div');

    newdiv.setAttribute("id", "invalidEmailPassword")
    newdiv.setAttribute("class", "invalid-feedback");

    newdiv.append(`-${msg}`);
    form.insertBefore(newTdiv, form.firstChild)
    newdiv.style.display = "block";
  }  
  
}

const isValidEmail = (email) => 
{
  var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(emailFormat)
}

const isValidPassword = (value) => 
{
  let validated =  true;

  if(!(/\d/g).test(value))
  {
    validated = false;
    console.log("should contain at least one digit")
  }
     
  if(! (/[a-z]/).test(value))
  {
    validated = false;
    console.log("should contain at least one lower case")
  }
      
  if(! (/[A-Z]/).test(value))
  {
    validated = false;
    console.log("should contain at least one upper case")
  }
    
  if(! (/[a-zA-Z0-9]{8,}/).test(value))
  {
    validated = false;
    console.log("should contain at least 8 from the mentioned characters")
  }
  return validated;
}