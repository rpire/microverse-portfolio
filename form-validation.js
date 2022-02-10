function validation() {
  const form = document.getElementById('form');
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const comment = form.elements.comment.value;
  const message = document.getElementById('message');
  message.innerHTML = '';

  form.addEventListener('submit', (event) => {
    if (name.length < 1 || name === undefined) {
      event.preventDefault();
      message.innerHTML = '* Make sure to fill your name';
    } else if (email !== email.toLowerCase() || email < 1 || email === undefined) {
      event.preventDefault();
      message.innerHTML = '* Make sure you fill your email and that it is in lower case.';
    } else if (comment.length < 5 || comment === undefined) {
      event.preventDefault();
      message.innerHTML = '* Text area should have at least 5 characters';
    } else {
      form.submit();
    }
  });
}

validation();
