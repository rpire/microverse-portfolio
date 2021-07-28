function validation() {
  const form = document.getElementById('form');
  const email = form.elements['email'].value;
  const message = document.getElementById('message');
  message.innerHTML = "";
  const re = /@/g;
  if (re.test(String(email).toLowerCase()) == true) {
    if (email !== email.toLowerCase()) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
      });
      message.innerHTML = "* Make sure your email is in lower case.";
      console.log('invalid email!');
    } else {
      form.submit();
    }
    console.log(email);
  }
}
