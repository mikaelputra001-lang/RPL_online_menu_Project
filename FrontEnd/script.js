const menuBoxes = document.querySelectorAll('.box');
const totalText = document.querySelector('#counter h2');
const btnMinus = document.querySelectorAll('#counter button')[0];
const btnPlus = document.querySelectorAll('#counter button')[1];

let totalHarga = 0;

menuBoxes.forEach(box => {
    box.addEventListener('click', () => {
        let teksHarga = box.querySelector('b').innerText;
        let harga = parseInt(teksHarga.replace('Rp.',''));
        totalHarga += harga;
        totalText.innerText = 'Rp.' + totalHarga;
    });
});

btnPlus.addEventListener('click', () => {
    totalHarga += 1000;
    totalText.innerText = 'Rp.', totalHarga;
});