const form = document.querySelector('form');
const firstName = document.getElementById('first-name')
const subject = document.getElementById('subject')
const email = document.getElementById('email')
const message = document.getElementById('message')

function sendEmail(){
  const bodyMessage = `FirstName: ${firstName.value}
  <br> Email: ${email.value}, Message: ${message.value} `;
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "liyanahealthcare27@gmail.com",
    Password : "67302B75EE5EAFE5C2DF1DB473F39AF76154",
    To : 'liyanahealthcare27@gmail.com',
    From : "liyanahealthcare27@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if(message == "OK"){
        Swal.fire({
          title: "Thanks For your Message &#128522",
          text: "Your message sent successfully!!",
          icon: "success"
        });
    }
  }
);
}

function validation(){
  const items = document.querySelectorAll('.item');

  for(const item of items){
        if(item.value == ""){
          item.classList.add('error');
          item.parentElement.classList.add('error')
        }
        
        if(items[1].value != ""){
          checkEmail();
        }
        items[1].addEventListener("keyup", () => {
          checkEmail();
        })
        item.addEventListener("keyup", () => {
          if(item.value != ""){
            item.classList.remove('error');
            item.parentElement.classList.remove('error')
          }
          else{
            item.classList.add("error");
            item.parentElement.classList.add("error")
          }
        })
  }
}

function checkEmail(){
  const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const emailerror = document.querySelector('.error-text.email')
  if(!email.value.match(emailregex)){
    email.classList.add("error");
    email.parentElement.classList.add("error")
    
    if(email.value != ""){
      emailerror.innerHTML = "enter a valid email"
    } else{
      emailerror.innerHTML = "email address can't be blank"
    }
  } else{
    email.classList.remove("error");
    email.parentElement.classList.remove("error")
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  validation();

  if(!firstName.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") 
    && !message.classList.contains("error")){
      sendEmail();

      form.reset();

      return false
  }


})