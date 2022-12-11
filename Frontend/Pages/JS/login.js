const login = () =>{
    const form = document.getElementById('formlogin');
if(form){
  form.addEventListener("submit",(e)=>{
   
    e.preventDefault();
  validate()
 
  })
  }
}

  const validate= () =>{
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const usersDetails = {
        emailAddress: email,
        userPassword: password
    }
        localStorage.setItem("details", JSON.stringify(usersDetails))
  }