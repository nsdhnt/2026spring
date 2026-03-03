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

    // 参加メンバー
    const payLateImgs = document.querySelectorAll(".payLateWrap .payCardLeft img");
    plus.checkBoxes.forEach((src, i) => {
        if (payLateImgs[i]) {
            payLateImgs[i].src = src;
        }
    });

    // 払う人
    const payPersons = document.querySelectorAll(".payLateWrap .payPerson");
    payPersons.forEach((elem, i) => {
        if (i === 0) {
            // 自分
            elem.innerHTML = `<span>（自分）</span>`;
        } else if (plus.checkBoxes[i]) {
            elem.textContent = ""; 
        }
    });

    // 個別の支払金額
    const payPrices = document.querySelectorAll(".payLateWrap .payPrice");
    if (plus.payPrice) {
        payPrices.forEach((p, i) => {
            p.textContent = `${plus.payPrice}円`;
        });
    }
});