document.addEventListener("DOMContentLoaded", () => {
    const pluses = JSON.parse(localStorage.getItem("pluses")) || [];

    const Box = document.querySelector(".historyBox");
    const card = document.querySelector(".card"); // 黄色い四角
    const homeBtn = document.querySelector(".deleat"); // ホームボタン

    if (pluses.length === 0) {
        if (card) card.style.display = "none";   // データなし  非表示
        return;
    }

    const plus = pluses[pluses.length - 1];

    if (Box) Box.style.display = "block";
    if (card) card.style.display = "block";

    // タイトル表示
    const titleElem = document.getElementsByClassName("title")[0];
    if (titleElem) titleElem.textContent = plus.title;

    // 画像表示
    const payArea = document.querySelector(".pay");
    if (payArea) {
        payArea.innerHTML = "";  // リセット

        plus.checkBoxes.forEach(data => {
            const img = document.createElement("img");

            img.src = data.img;
            img.style.width = "30px";
            img.style.marginRight = "10px";

            payArea.appendChild(img);
        });
    }

    console.log(plus);

    // ホームを押したらデータを消す
    if (homeBtn) {
        homeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("pluses"); // データ削除
            if (card) card.style.display = "none";
            if (Box) Box.style.display = "none";
        });
    }
});