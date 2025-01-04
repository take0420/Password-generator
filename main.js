'use strict';

{
  const slider = document.getElementById('slider');
  const btn = document.getElementById('btn');

  slider.addEventListener('input', () => {
    const passwordLength = document.getElementById('password-length');

    passwordLength.textContent = slider.value;
  });

  btn.addEventListener('click', () => {
    const result = document.getElementById('result');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';

    for (let i = 0; i < slider.value; i++) {
      password += letters[Math.floor(Math.random() * 26)];
    }

    result.textContent = password;
  });
}
