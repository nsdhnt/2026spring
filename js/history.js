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

    // // 参加メンバー
    // const payLateImgs = document.querySelectorAll(".payLateWrap .payCardLeft img");
    // plus.checkBoxes.forEach((src, i) => {
    //     if (payLateImgs[i]) {
    //         payLateImgs[i].src = src;
    //     }
    // });

    // // 払う人
    // const payPersons = document.querySelectorAll(".payLateWrap .payPerson");
    // payPersons.forEach((elem, i) => {
    //     if (i === 0) {
    //         // 自分
    //         elem.innerHTML = `<span>（自分）</span>`;
    //     } else if (plus.checkBoxes[i]) {
    //         elem.textContent = ""; 
    //     }
    // });

    // // 個別の支払金額
    // const payPrices = document.querySelectorAll(".payLateWrap .payPrice");
    // if (plus.payPrice) {
    //     payPrices.forEach((p, i) => {
    //         p.textContent = `${plus.payPrice}円`;
    //     });
    // }

    // payLate の要素をすべて取得
    const payCard = document.querySelectorAll(".payCard");

    plus.checkBoxes.forEach((data, i) => {
        const payLate = payCard[i];
        if (!payLate) return;

        const cardLeft = payCard[i].querySelector(".payCardLeft");
        const imgElem = cardLeft?.querySelector("img");
        const nameElem = cardLeft?.querySelector(".payPerson");
        const priceElem = payCard[i].querySelector(".payPrice");

        // 画像と名前をセット
        if (imgElem) imgElem.src = data.img;
        if (nameElem) nameElem.textContent = i === 0 ? `${data.name}（自分）` : data.name;

        // 支払金額
        if (priceElem) priceElem.textContent = `${plus.payPrice}円`;
    });

});