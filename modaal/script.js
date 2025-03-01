
let loginBtn = document.getElementById('loginBtn');
let signupBtn = document.getElementById('signupBtn');
let loginModal = document.getElementById('loginModal');
let signupModal = document.getElementById('signupModal');
let closeBtns = document.querySelectorAll('.close');

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});


signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'flex';
});


closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
  });
});


window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
  if (event.target === signupModal) {
    signupModal.style.display = 'none';
  }
});