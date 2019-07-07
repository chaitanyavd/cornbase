
export const fetchCoins = () => (
    $.ajax({
        url: "https://api.coincap.io/v2/assets/?limit=50",
        method: "GET", 
        timeout: 0
    })
)

export const fetchCoin = (id) => (
    $.ajax({
        method: "GET", 
        url: `api/coin/${id}`
    })
)


