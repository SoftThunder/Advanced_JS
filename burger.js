
document.querySelector("button").addEventListener("click", event => {
    event.preventDefault();
    const inpEls = document.querySelectorAll("input");
    const priceArr = [];
    const kkalArr =[];
inpEls.forEach(element => {
    if (element.checked === true) {
        priceArr.push(element.getAttribute('date-price'));
        kkalArr.push(element.getAttribute('date-kkal'));
    }
    
});
const sumPrice = priceArr.reduce(
    (prev, currentValue) => Number(prev) + Number(currentValue),
    0
);
const sumKkal = kkalArr.reduce(
    (prev, currentValue) => Number(prev) + Number(currentValue),
    0
);
document.getElementById("total_kkal").textContent = sumKkal;
document.getElementById("total_price").textContent = sumPrice;

});


