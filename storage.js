function storeForm() {  
  const form = document.getElementById('form');
  const name = form.name.value;
  const email = form.email.value;
  const comment = form.comment.value;
  let myStorage = {
    userName: name,
    userEmail: email,
    userComment: comment,
  }
  
  localStorage.setItem('storage', JSON.stringify(myStorage));
}

window.onload = (event) => {
  if (!localStorage.getItem('storage')) {
    console.log('Storage is empty :(');
  }
  else {
    let oldStorage = localStorage.getItem('storage');
    let newStorage = JSON.parse(oldStorage);
    const form = document.getElementById('form');
    form.name.value = newStorage.userName;
    form.email.value = newStorage.userEmail;
    form.comment.value = newStorage.userComment;
  }
}
