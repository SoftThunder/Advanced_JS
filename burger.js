
document.querySelector("button").addEventListener("click", event => {
    event.preventDefault();
    const inpEls = document.querySelectorAll("input");
inpEls.forEach(element => {
    if (element.checked === true) {
        const sumPrice = element.getAttribute('date-price');
       
    }
    console.dir(sumPrice);
});
});


