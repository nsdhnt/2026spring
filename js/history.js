document.addEventListener("DOMContentLoaded", () => {

    const pluses = JSON.parse(localStorage.getItem("pluses")) || [];
    if (pluses.length === 0) return;

    const plus = pluses[pluses.length - 1];

    // タイトル
    const titleElem = document.querySelector(".title h2");
    if (titleElem) titleElem.textContent = plus.title;

    // 場所
    const placeElem = document.querySelector(".place");
    if (placeElem) {
        placeElem.innerHTML = `<img src="img/icon_pin.png" alt="">${plus.place}`;
    }

    // 合計金額
    const payElem = document.querySelector(".pay");
    if (payElem) {
        payElem.innerHTML = `<img src="img/icon_price.png" alt="">${plus.currentPrice}円`;
    }

    // 先に払う人
    const payPerson = document.querySelector(".currentPrice");
    if (payPerson) payPerson.textContent = plus.payPerson;

    // 参加メンバーの画像と名前
    const payLateElems = document.querySelectorAll(".payLateWrap .payLate");
    plus.checkBoxes.forEach((data, i) => {
        const payLate = payLateElems[i]; 
        if (!payLate) return;

        const imgElem = payLate.querySelector(".payCardLeft img");
        const nameElem = payLate.querySelector(".payPerson");
        const priceElem = payLate.querySelector(".payPrice");

        if (imgElem) imgElem.src = data.img;
        if (nameElem) {
            nameElem.innerHTML = data.name;
        }
        if (priceElem && plus.payPrice) priceElem.textContent = `${plus.payPrice}円`;
    });

});