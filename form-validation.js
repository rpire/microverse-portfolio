function validation() {
  const form = document.getElementById('form');
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const comment = form.elements.comment.value;
  const message = document.getElementById('message');
  message.innerHTML = '';
  const re = /@/g;
  if (re.test(String(email).toLowerCase()) === true) {
    if (name.length < 1) {
      form.addaddEventListener('submit', (event) => {
        event.preventDefault();
      });
      message.innerHTML = '* Make sure to fill your name';
    }
    else if (email !== email.toLowerCase()) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
      });
      message.innerHTML = '* Make sure your email is in lower case.';
    }
    else if (comment.length < 5) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
      });
      message.innerHTML = '* Text area should have at least 5 characters';
    }
    else {
      form.submit();
    }
  }
}
validation();