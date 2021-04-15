

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
            addInvalidEmail(form)
            console.log("INVALID EMAIL!!")

            // Reset values
            // emailInput.value = ""
            // passwordInput.value = ""
            return false;
          }

          document.querySelector("#invalidEmailPassword").style.display = "none";   

          console.log("NOW CAN SEND FORM!!!")
        }

        form.classList.add('was-validated')
        
      }, false)
    }
  )
})()


const addInvalidEmail = (form) => 
{

  if(document.querySelector("#invalidEmailPassword") === null)
  {
    const msg = "O e-mail informado para autenticação, não é um e-mail válido.";

    const newTweet = document.createElement('div');
    newTweet.setAttribute("id", "invalidEmailPassword")
    newTweet.setAttribute("class", "invalid-feedback");

    newTweet.append(`-${msg}`);
    form.insertBefore(newTweet, form.firstChild)

    newTweet.style.display = "block";
  }  
  
}

function isValidEmail(email) 
{
  var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(emailFormat)

}