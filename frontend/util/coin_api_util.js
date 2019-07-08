
// export const fetchCoins = () => (
//     $.ajax({
//         url: "https://api.coincap.io/v2/assets/?limit=50",
//         method: "GET", 
//         timeout: 0
//     })
// )

export const fetchCoin = (symbol) => (
    $.ajax({
        method: "GET", 
        url: `https://api.nomics.com/v1/currencies/ticker?key=66f825496dd3f9963d852713f779e206&ids=${symbol}`
    })
)




export const fetchCoins = () => (
    $.ajax({
        url: "https://api.nomics.com/v1/currencies/ticker?key=66f825496dd3f9963d852713f779e206",
        method: "GET"
    })
)