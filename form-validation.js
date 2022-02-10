function validation() {
  const form = document.getElementById('form');
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const alert = document.getElementById('alert');
  alert.innerHTML = '';

  form.addEventListener('submit', (event) => {
    if (name.length < 1 || name === undefined) {
      event.preventDefault();
      alert.innerHTML = '* Make sure to fill your name';
    } else if (email !== email.toLowerCase() || email < 1 || email === undefined) {
      event.preventDefault();
      alert.innerHTML = '* Make sure you fill your email and that it is in lower case.';
    } else if (message.length < 5 || message === undefined) {
      event.preventDefault();
      alert.innerHTML = '* Text area should have at least 5 characters';
    } else {
      form.submit();
    }
  });
}

validation();
