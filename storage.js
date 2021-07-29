function storeForm() {  const form = document.getElementById('form');
  const name = form.nameu.value;
  const email = form.email.value;
  const comment = form.comment.value;
  let myStorage = {
    userName: name,
    userEmail: email,
    userComment: comment,
  }  localStorage.setItem('storage', JSON.stringify(myStorage));
}
