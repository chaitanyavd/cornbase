
export const fetchCoins = () => (
    $.ajax({
        method: "GET", 
        url: "api/coins"
    })
)

export const fetchCoin = (id) => (
    $.ajax({
        method: "GET", 
        url: `api/coin/${id}`
    })
)

