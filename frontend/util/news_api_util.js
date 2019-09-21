export const fetchCoinNews = (name) => {
    // debugger 
    // let coin = name.toLowerCase()
    return ($.ajax({
        method: "GET",
        url: `https://cryptocontrol.io/api/v1/public/news/coin/${name}?key=72e0323da194e0918c59f302c1e5a1d8`
    })
    )
}

export const fetchGeneralNews = () => {
    let coin = name.toLowerCase()
    return ($.ajax({
        method: "GET",
        url: `https://cryptocontrol.io/api/v1/public/news/?key=72e0323da194e0918c59f302c1e5a1d8`
    })
    )
}

