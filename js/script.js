{
    const showRates = () => {
        const ratesElement = document.querySelector("#rates");
        const buyElement = document.querySelector(".js-buyRate");
        const sellElement = document.querySelector(".js-sellRate");

        const buyEur = 4.6751;
        const sellEur = 4.7041;
        const buyUsd = 4.4260;
        const sellUsd = 4.4530;
        const buyChf = 4.7316;
        const sellChf = 4.7626;
        const buyGbp = 5.4343;
        const sellGbp = 5.4743;

        switch (ratesElement.value) {
            case "eur":
                buyElement.innerText = buyEur.toFixed(2);
                sellElement.innerText = sellEur.toFixed(2);
                break;
            case "usd":
                buyElement.innerText = buyUsd.toFixed(2);
                sellElement.innerText = sellUsd.toFixed(2);
                break;
            case "chf":
                buyElement.innerText = buyChf.toFixed(2);
                sellElement.innerText = sellChf.toFixed(2);
                break;
            case "gbp":
                buyElement.innerText = buyGbp.toFixed(2);
                sellElement.innerText = sellGbp.toFixed(2);
                break;
        }
    }

    const calculateToPln = () => {
        const toPlnElement = document.querySelector("#toPln");
        const foreignElement = document.querySelector(".js-foreignCurrency");
        const buyPlnElement = document.querySelector(".js-buyPln");

        const buyEur = 4.6751;
        const buyUsd = 4.4260;
        const buyChf = 4.7316;
        const buyGbp = 5.4343;

        switch (toPlnElement.value) {
            case "eurPln":
                foreign = foreignElement.value;
                sale = foreign * buyEur;
                buyPlnElement.innerText = sale.toFixed(2);
                break;
            case "usdPln":
                foreign = foreignElement.value;
                sale = foreign * buyUsd;
                buyPlnElement.innerText = sale.toFixed(2);
                break;
            case "chfPln":
                foreign = foreignElement.value;
                sale = foreign * buyChf;
                buyPlnElement.innerText = sale.toFixed(2);
                break;
            case "gbpPln":
                foreign = foreignElement.value;
                sale = foreign * buyGbp;
                buyPlnElement.innerText = sale.toFixed(2);
                break;
        }
    }

    const calculateToOther = () => {
        const fromPlnElement = document.querySelector("#fromPln");
        const nationalElement = document.querySelector(".js-nationalCurrency");
        const sellPlnElement = document.querySelector(".js-sellPln");

        const sellEur = 4.7041;
        const sellUsd = 4.4530;
        const sellChf = 4.7626;
        const sellGbp = 5.4743;

        switch (fromPlnElement.value) {
            case "plnEur":
                national = nationalElement.value;
                purchase = national / sellEur;
                sellPlnElement.innerText = purchase.toFixed(2);
                break;
            case "plnUsd":
                national = nationalElement.value;
                purchase = national / sellUsd;
                sellPlnElement.innerText = purchase.toFixed(2);
                break;
            case "plnChf":
                national = nationalElement.value;
                purchase = national / sellChf;
                sellPlnElement.innerText = purchase.toFixed(2);
                break;
            case "plnGbp":
                national = nationalElement.value;
                purchase = national / sellGbp;
                sellPlnElement.innerText = purchase.toFixed(2);
                break;
        }
    }

    const validateNumber = () => {
        const buyPlnElement = document.querySelector(".js-buyPln");
        const sellPlnElement = document.querySelector(".js-sellPln");

        if (Math.sign(foreign) === -1) {
            buyPlnElement.innerText = "błąd - liczba ujemna";
            alert("Wykryto liczbę ujemną! Wpisujemy tylko liczby dodatnie.");
        }

        if (Math.sign(national) === -1) {
            sellPlnElement.innerText = "błąd - liczba ujemna";
            alert("Wykryto liczbę ujemną! Wpisujemy tylko liczby dodatnie.");
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
//         buyPlnElement.innerText = "błąd - liczba ujemna";
//         alert("Wykryto liczbę ujemną! Wpisujemy tylko liczby dodatnie.");
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
//         sellPlnElement.innerText = "błąd - liczba ujemna";
//         alert("Wykryto liczbę ujemną! Wpisujemy tylko liczby dodatnie.");
//     }

// })