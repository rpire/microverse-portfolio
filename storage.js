function storeForm() {
  const form = document.getElementById('form');
  const name = form.name.value;
  const email = form.email.value;
  const comment = form.comment.value;
  const myStorage = {
    userName: name,
    userEmail: email,
    userComment: comment,
  };
  localStorage.setItem('storage', JSON.stringify(myStorage));
}

function refresh() {
  if (localStorage.getItem('storage')) {
    const oldStorage = localStorage.getItem('storage');
    const newStorage = JSON.parse(oldStorage);
    const form = document.getElementById('form');
    form.name.value = newStorage.userName;
    form.email.value = newStorage.userEmail;
    form.comment.value = newStorage.userComment;
  }
}

window.onload = refresh;

storeForm();