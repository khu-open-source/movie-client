function resetClass(element, classname) {
  element.classList.remove(classname);
}

document.getElementsByClassName('show-signup')[0].addEventListener('click', () => {
  const form = document.getElementsByClassName('form')[0];
  resetClass(form, 'signin');
  resetClass(form, 'reset');
  form.classList.add('signup');
  document.getElementById('submit-btn').innerText = 'Sign Up';
});
