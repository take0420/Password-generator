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
    const numbersCheckbox = document.getElementById('numbers-checkbox');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    let password = '';
    let seed = letters + letters.toUpperCase();

    if (numbersCheckbox.checked) {
      seed += numbers;
    }

    for (let i = 0; i < slider.value; i++) {
      password += seed[Math.floor(Math.random() * seed.length)];
    }

    result.textContent = password;
  });
}
