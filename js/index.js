document.addEventListener("DOMContentLoaded" , () => {
    const pluses = JSON.parse(localStorage.getItem("pluses")) || [];

    if (pluses.length === 0) return;

    const plus = pluses[pluses.length - 1];

    document.getElementsByClassName("title").textContent = plus.title;
    document.getElementsByClassName("pay").textContent = plus.checkBoxes;

})