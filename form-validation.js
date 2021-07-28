function validation() {
  const form = document.getElementById('form');
  const email = form.elements['email'].value;
  const message = document.getElementById('message');
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase()) == true) {
    if (email !== email.toLowerCase()) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
      });
      message.innerHTML = "Make sure your email is in lower case.";
      console.log('invalid email!');
    } else {
      form.submit();
    }
    console.log(email);
  }
}
