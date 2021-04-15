

(function () {
  
  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault()

        if (!form.checkValidity()) {
          console.log("IN CHECK VALIDITY!!!")
          event.stopPropagation()                       
        }
        else
        {
          const emailInput = form.elements.email;
          const passwordInput = form.elements.password;
    
          console.log(emailInput.value, passwordInput.value );

          if (!isValidEmail(emailInput.value))
          {
            console.log("INVALID EMAIL!!")

            // Reset values
            emailInput.value = ""
            passwordInput.value = ""

            return false;
          }
          

          console.log("NOW CAN SEND FORM!!!")
        }

        form.classList.add('was-validated')
        
      }, false)
    }
  )
})()


function isValidEmail(email) 
{
  var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(emailFormat)

}