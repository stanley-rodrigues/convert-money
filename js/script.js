const button = document.querySelector('button')
const inputReal = document.getElementById('input-real')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000070

const convertValues = () => {

    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')


    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReal)

    if (select.value === 'US$ Dólar americano') {

        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReal / dolar)

    }

    if (select.value === '€ Euro') {

        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReal / euro)
    }

    if (select.value === 'BTC Bitcoin') {

        currencyValueText.innerHTML = (bitcoin / inputReal)
    }
    console.log(bitcoin)
    
}

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.svg"
    }

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.svg"
    }

    if (select.value === 'BTC Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/btc.png"
    }
convertValues()
}

button.addEventListener('click', convertValues)

select.addEventListener('change', changeCurrency)