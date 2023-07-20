{
    const calculateResult = (currency, amount) => {
        const rateEUR = 4.46;
        const rateUSD = 4.12;
        const rateGBP = 5.21;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong class="result">${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(currency, amount);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
    };

    init(); 
};