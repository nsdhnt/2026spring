const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const qrSheet = document.getElementById('qrSheet');

// ボタンを押したらシートを出す
openBtn.addEventListener('click', () => {
    qrSheet.classList.add('active');
});

// ×ボタンを押したらシートを引っ込める
closeBtn.addEventListener('click', () => {
    qrSheet.classList.remove('active');
});