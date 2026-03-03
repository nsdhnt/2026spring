const option = document.querySelector("fieldset");
const payLateBtn = document.querySelector(".payPersonLate > p");
// const rightbtn = document.querySelector(".payPersonLate > p > span");

const header = document.querySelector('h1');
const plusKeepBtn = document.querySelector(".plusKeep");
const calcBtn = document.querySelector(".calc")

// 入力された値
const title = document.querySelector(".title input");
const place = document.querySelector(".place input");
const sumPrice = document.querySelector(".sumPrice input");
const payPerson = document.querySelector(".payPerson select");
const checkBoxes = document.querySelectorAll(".checkbox");
const payPrice = document.querySelector(".payPrice");


// ヘッダーの戻るボタン機能
header.addEventListener('click', (e) => {
    // アイコンの幅が例えば 40px の場合
    const iconWidth = 40; 
    
    // クリックした位置（要素内でのX座標）を取得
    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if (x <= iconWidth) {
        window.history.back();
    }
});

// 「あとで払う人」の友達一覧表示
payLateBtn.addEventListener(`click`, () => {
    if(option.style.display === `none`){
        option.style.display = `block`;
        // rightbtn.style.transform = rotateX(`90px`);
    } else{
        option.style.display = `none`;
    }
});

// 「計算する」ボタン
calcBtn.addEventListener(`click`, ()=>{
    const currentPrice = document.querySelector(".sumPrice input");

    // 合計金額
    const currentPriceValue = currentPrice.value;
    console.log(currentPriceValue / 3);
    const payPrice = document.querySelector(".payPrice input");
    console.log(payPrice.value);

    const selected = Array.from(checkBoxes)
        .filter(c => c.checked)
        .map(c => c.value);

    console.log(selected.length + 1);
    const peopleNum = selected.length + 1;

    // ごはんの参加人数
    console.log(peopleNum);

    // 合計金額を参加人数で割る
    payPrice.value = `${currentPriceValue / peopleNum}`;
});

// 「追加する」ボタン
plusKeepBtn.addEventListener(`click`, ()=>{
    const title = document.querySelector(".title input");
    const place = document.querySelector(".place input");
    const currentPrice = document.querySelector(".sumPrice input");
    const payPerson = document.querySelector(".payPerson select");
    const checkBoxes = document.querySelectorAll(".checkbox:checked");
    const checkedValues = Array.from(checkBoxes).map(box => {
        return {
            name: box.value, // 名前
            img: box.parentElement.querySelector("img").getAttribute("src") // 画像
        };
    });
    const payPrice = document.querySelector(".payPrice");

    // タイトル(titleValue)
    const titleValue = title.value;
    console.log(titleValue);

    // 場所(placeValue)
    const placeValue = place.value;
    console.log(placeValue);

    // 合計金額(currentPriceValue)
    const currentPriceValue = currentPrice.value;
    console.log(currentPriceValue);

    // 払う人(payPersonValue)
    const payPersonValue = payPerson.value;
    console.log(payPersonValue);

    const selected = Array.from(checkBoxes)
    .filter(c => c.checked)
    .map(c => c.value);
    
    selected.forEach(select =>{
        // あとで払う人(select)
        console.log(select);
    });

    // 払う金額(currentPriceValue / peopleNum)
    const peopleNum = selected.length + 1;
    console.log(currentPriceValue / peopleNum)


    // データの作成
    const plus = {
        title,
        place,
        currentPrice: Number(currentPrice),
        payPerson,
        checkBoxes: checkedValues,
        payPrice: Number(payPrice)
    };

    // データの取得
    const pluses = JSON.parse(localStorage.getItem("pluses")) || [];

    // 追加
    pluses.push(plus);

    // 保存
    localStorage.setItem("pluses" , JSON.stringify(pluses));

    // 表示ページ
    location.href = "index.html";
});
