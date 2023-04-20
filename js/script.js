const button = document.querySelector('button')
const inputReal = document.getElementById('input-real')
const select = document.getElementById('currency-select')

// const dolar = 5.2
// const euro = 5.9
// const bitcoin = 0.0000070

const convertValues = async () => {

    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(res => res.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

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

        currencyValueText.innerHTML = (inputReal/bitcoin  )
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