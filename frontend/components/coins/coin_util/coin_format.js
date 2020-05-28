const billion = 1000000000;
const million = 1000000;

export const formatCoinInformation = (coin_object) => {
    const {
        price,
        market_cap,
        circulating_supply,
        high,
        "1d": { volume },
        rank,
        symbol,
        name,
        logo_url,
    } = coin_object;

    const response = {
        price: formatPrice(price),
        supply: formatCirculatingSupply(circulating_supply),
        marketCap: formatMarketCap(market_cap),
        high: formatHigh(high),
        volume: formatVolume(volume),
        name: name,
        symbol: symbol,
        rank: rank,
        logo: logo_url,
    };
    return response;
};

export const formatCoindata = (coin_data) => {

    let color; 
    const fill = "rgb(244, 198, 34)";
    const stroke = "rgb(244, 198, 34)";
    
    const {max, min, change} = calculateChange(coin_data)

    if (change >= 0) {
        color = "graph-pospercent-change"
    } else {
        color = "graph-negpercent-change"
    }
    
    const response = {
        color,
        fill,
        stroke,
        max,
        min,
        change,
    };
    return response
}   

const calculateChange = (data) => {
    let min = -Infinity;
    let max = Infinity;
    const close = data.map((object) => object.close);

    if (close.length >= 1) {
        min = close.reduce((acc, el) => Math.min(acc, el));
        max = close.reduce((acc, el) => Math.max(acc, el));
    }

    const change = max - min; 

    return {
        max, min, change
    }
}
const formatPrice = (coinPrice) => {
    const price = parseFloat(coinPrice);
    if (price > 0.1) {
        return price.toFixed(2);
    } else {
        return price.toFixed(4);
    }
};

const formatCirculatingSupply = (circulatingSupply) => {
    const supply = parseFloat(circulatingSupply);

    if (supply > billion) {
        return `${(supply / billion).toFixed(1)}B`;
    } else {
        return `${(supply / million).toFixed(1)}M`;
    }
};

const formatMarketCap = (marketCapitalization) => {
    const marketCap = parseFloat(marketCapitalization);

    if (marketCap > billion) {
        return `${(marketCap / billion).toFixed(1)}B`;
    } else {
        return `${(marketCap / million).toFixed(1)}M`;
    }
};

const formatHigh = (allTimeHigh) => {
    const high = parseFloat(allTimeHigh);
    if (high > 0.1) {
        return high.toFixed(2);
    } else {
        return high.toFixed(4);
    }
};

const formatVolume = (dayVolume) => {
    const volume = parseFloat(dayVolume);

    if (volume > billion) {
        return `$${(volume / billion).toFixed(1)}B`;
    } else {
        return `$${(volume / million).toFixed(1)}M`;
    }
};
