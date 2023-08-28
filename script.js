window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  const form = document.querySelector('form');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const errorElement = document.querySelector('.error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  if (username === 'admin' && password === 'password') {
    window.location.href = 'dashboard.html';
  } else {
    errorElement.innerText = 'Invalid username or password';
  }
});
const categorySelect = document.getElementById('category');

categorySelect.addEventListener('change', () => {
  const category = categorySelect.value;
  const books = document.querySelectorAll('.book');
  
  books.forEach(book => {
    if (category === ''
  