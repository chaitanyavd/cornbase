
//? API CALL FOR COIN DATA: 

export const fetchCoin = (symbol) => {
    return ( 
    $.ajax({
        method: "GET", 
        url: `api/coins/${symbol}`
    })
    )
}

export const fetchCoins = () => {
    return ( 
    $.ajax({
        method: "GET", 
        url: `api/coins/`
    })
    )
}


//? API CALL FOR GRAPHS: 

export const fetchCoinAllData = (symbol) => (
    $.ajax({
        method: "GET", 
        url: `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&aggregate=10&allData=true`
    })
)

export const fetchCoinYearData = (symbol) => (
    $.ajax({
        method: "GET", 
        url: `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&limit=365`
    })
)

export const fetchCoinMonthData = (symbol) => (
    $.ajax({
        method: "GET", 
        url: `https://min-api.cryptocompare.com/data/histohour?fsym=${symbol}&tsym=USD&aggregate=2&limit=365`
    })
)

export const fetchCoinWeekData = (symbol) => (
    $.ajax({
        method: "GET", 
        url: `https://min-api.cryptocompare.com/data/histohour?fsym=${symbol}&tsym=USD&limit=168`
    })
)

export const fetchCoinDayData = (symbol) => (
    $.ajax({
        method: "GET", 
        url: `https://min-api.cryptocompare.com/data/histominute?fsym=${symbol}&tsym=USD&aggregate=4&limit=360`
        
    })
)

export const fetchCoinHourData = (symbol) => (
    $.ajax({
        method: "GET", 
        url: `https://min-api.cryptocompare.com/data/histominute?fsym=${symbol}&tsym=USD&limit=60`
    })
)

