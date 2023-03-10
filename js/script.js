{
    const buyEur = 4.6751;
    const sellEur = 4.7041;
    const buyUsd = 4.4260;
    const sellUsd = 4.4530;
    const buyChf = 4.7316;
    const sellChf = 4.7626;
    const buyGbp = 5.4343;
    const sellGbp = 5.4743;

    const showRates = () => {
        const ratesElement = document.querySelector("#rates");
        const buyElement = document.querySelector(".js-buyRate");
        const sellElement = document.querySelector(".js-sellRate");

        let buy;
        let sell;

        switch (ratesElement.value) {
            case "eur":
                buy = buyEur.toFixed(2);
                sell = sellEur.toFixed(2);
                break;
            case "usd":
                buy = buyUsd.toFixed(2);
                sell = sellUsd.toFixed(2);
                break;
            case "chf":
                buy = buyChf.toFixed(2);
                sell = sellChf.toFixed(2);
                break;
            case "gbp":
                buy = buyGbp.toFixed(2);
                sell = sellGbp.toFixed(2);
                break;
            default:
                buy = 'N/A';
                sell = 'N/A';
        }
        buyElement.innerText = buy;
        sellElement.innerText = sell;
    }

    const calculateToPln = () => {
        const toPlnElement = document.querySelector("#toPln");
        const foreign = document.querySelector(".js-foreignCurrency").value;
        const buyPlnElement = document.querySelector(".js-buyPln");

        let buyPln;
        let sale;

        switch (toPlnElement.value) {
            case "eurPln":
                sale = foreign * buyEur;
                buyPln = sale.toFixed(2);
                break;
            case "usdPln":
                sale = foreign * buyUsd;
                buyPln = sale.toFixed(2);
                break;
            case "chfPln":
                sale = foreign * buyChf;
                buyPln = sale.toFixed(2);
                break;
            case "gbpPln":
                sale = foreign * buyGbp;
                buyPln = sale.toFixed(2);
                break;
        }
        buyPlnElement.innerText = buyPln;
    }

    const calculateToOther = () => {
        const fromPlnElement = document.querySelector("#fromPln");
        const national = document.querySelector(".js-nationalCurrency").value;
        const sellPlnElement = document.querySelector(".js-sellPln");

        let sellPln;
        let purchase;

        switch (fromPlnElement.value) {
            case "plnEur":
                purchase = national / sellEur;
                sellPln = purchase.toFixed(2);
                break;
            case "plnUsd":
                purchase = national / sellUsd;
                sellPln = purchase.toFixed(2);
                break;
            case "plnChf":
                purchase = national / sellChf;
                sellPln = purchase.toFixed(2);
                break;
            case "plnGbp":
                purchase = national / sellGbp;
                sellPln = purchase.toFixed(2);
                break;
        }
        sellPlnElement.innerText = sellPln;
    }

    const validateNumber = () => {
        const buyPlnElement = document.querySelector(".js-buyPln");
        const sellPlnElement = document.querySelector(".js-sellPln");
        const foreign = document.querySelector(".js-foreignCurrency").value;
        const national = document.querySelector(".js-nationalCurrency").value;

        if (Math.sign(foreign) === -1) {
            buyPlnElement.innerText = "b????d - liczba ujemna";
            alert("Wykryto liczb?? ujemn??! Wpisujemy tylko liczby dodatnie.");
        }

        if (Math.sign(national) === -1) {
            sellPlnElement.innerText = "b????d - liczba ujemna";
            alert("Wykryto liczb?? ujemn??! Wpisujemy tylko liczby dodatnie.");
        }
    }

    const init = () => {
        const formElement = document.querySelector(".form");

        formElement.addEventListener("input", showRates);
        formElement.addEventListener("input", calculateToPln);
        formElement.addEventListener("input", calculateToOther);
        formElement.addEventListener("input", validateNumber);
    };

    init();
}


// let formElement = document.querySelector(".form");

// let ratesElement = document.querySelector("#rates");
// let buyElement = document.querySelector(".js-buyRate");
// let sellElement = document.querySelector(".js-sellRate");

// let foreignElement = document.querySelector(".js-foreignCurrency");
// let toPlnElement = document.querySelector("#toPln");
// let buyPlnElement = document.querySelector(".js-buyPln");

// let nationalElement = document.querySelector(".js-nationalCurrency");
// let fromPlnElement = document.querySelector("#fromPln");
// let sellPlnElement = document.querySelector(".js-sellPln");

// buyEur = 4.6751;
// sellEur = 4.7041;
// buyUsd = 4.4260;
// sellUsd = 4.4530;
// buyChf = 4.7316;
// sellChf = 4.7626;
// buyGbp = 5.4343;
// sellGbp = 5.4743;

// formElement.addEventListener("input", () => {
//     switch (ratesElement.value) {
//         case "eur":
//             buyElement.innerText = buyEur.toFixed(2);
//             sellElement.innerText = sellEur.toFixed(2);
//             break;
//         case "usd":
//             buyElement.innerText = buyUsd.toFixed(2);
//             sellElement.innerText = sellUsd.toFixed(2);
//             break;
//         case "chf":
//             buyElement.innerText = buyChf.toFixed(2);
//             sellElement.innerText = sellChf.toFixed(2);
//             break;
//         case "gbp":
//             buyElement.innerText = buyGbp.toFixed(2);
//             sellElement.innerText = sellGbp.toFixed(2);
//             break;
//     };

//     switch (toPlnElement.value) {
//         case "eurPln":
//             foreign = foreignElement.value;
//             sale = foreign * buyEur;
//             buyPlnElement.innerText = sale.toFixed(2);
//             break;
//         case "usdPln":
//             foreign = foreignElement.value;
//             sale = foreign * buyUsd;
//             buyPlnElement.innerText = sale.toFixed(2);
//             break;
//         case "chfPln":
//             foreign = foreignElement.value;
//             sale = foreign * buyChf;
//             buyPlnElement.innerText = sale.toFixed(2);
//             break;
//         case "gbpPln":
//             foreign = foreignElement.value;
//             sale = foreign * buyGbp;
//             buyPlnElement.innerText = sale.toFixed(2);
//             break;
//     };

//     if (Math.sign(foreign) === -1) {
//         buyPlnElement.innerText = "b????d - liczba ujemna";
//         alert("Wykryto liczb?? ujemn??! Wpisujemy tylko liczby dodatnie.");
//     }

//     switch (fromPlnElement.value) {
//         case "plnEur":
//             national = nationalElement.value;
//             purchase = national / sellEur;
//             sellPlnElement.innerText = purchase.toFixed(2);
//             break;
//         case "plnUsd":
//             national = nationalElement.value;
//             purchase = national / sellUsd;
//             sellPlnElement.innerText = purchase.toFixed(2);
//             break;
//         case "plnChf":
//             national = nationalElement.value;
//             purchase = national / sellChf;
//             sellPlnElement.innerText = purchase.toFixed(2);
//             break;
//         case "plnGbp":
//             national = nationalElement.value;
//             purchase = national / sellGbp;
//             sellPlnElement.innerText = purchase.toFixed(2);
//             break;
//     }

//     if (Math.sign(national) === -1) {
//         sellPlnElement.innerText = "b????d - liczba ujemna";
//         alert("Wykryto liczb?? ujemn??! Wpisujemy tylko liczby dodatnie.");
//     }

// })