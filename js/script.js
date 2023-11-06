{
    const currencies = {
        eur: {
            buy: 4.4556,
            sell: 4.4781
        },

        usd: {
            buy: 4.1483,
            sell: 4.1708
        },

        chf: {
            buy: 4.6205,
            sell: 4.6419
        },

        gbp: {
            buy: 5.1410,
            sell: 5.1658
        }
    };

    const showRates = () => {
        const ratesElement = document.querySelector("#rates");
        const buyElement = document.querySelector(".js-buyRate");
        const sellElement = document.querySelector(".js-sellRate");

        let buy;
        let sell;

        switch (ratesElement.value) {
            case "eur":
                buy = currencies.eur.buy.toFixed(2);
                sell = currencies.eur.sell.toFixed(2);
                break;
            case "usd":
                buy = currencies.usd.buy.toFixed(2);
                sell = currencies.usd.sell.toFixed(2);
                break;
            case "chf":
                buy = currencies.chf.buy.toFixed(2);
                sell = currencies.chf.sell.toFixed(2);
                break;
            case "gbp":
                buy = currencies.gbp.buy.toFixed(2);
                sell = currencies.gbp.sell.toFixed(2);
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
                sale = foreign * currencies.eur.buy;
                buyPln = sale.toFixed(2);
                break;
            case "usdPln":
                sale = foreign * currencies.usd.buy;
                buyPln = sale.toFixed(2);
                break;
            case "chfPln":
                sale = foreign * currencies.chf.buy;
                buyPln = sale.toFixed(2);
                break;
            case "gbpPln":
                sale = foreign * currencies.gbp.buy;
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
                purchase = national / currencies.eur.sell;
                sellPln = purchase.toFixed(2);
                break;
            case "plnUsd":
                purchase = national / currencies.usd.sell;
                sellPln = purchase.toFixed(2);
                break;
            case "plnChf":
                purchase = national / currencies.chf.sell;
                sellPln = purchase.toFixed(2);
                break;
            case "plnGbp":
                purchase = national / currencies.gbp.sell;
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