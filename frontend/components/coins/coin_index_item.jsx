import React from "react"; 
import { parse } from "querystring";


class CoinIndexItem extends React.Component {

    render() {

        const {coin, fetchCoin} = this.props; 

        // debugger 
        // There has to be a better way 

        // FOR COINCAP API 
        // let color = parseFloat(coin.changePercent24Hr).toFixed(2) >= 0 ? 'pospercent' : 'negpercent'; 
        // let marketCap = parseFloat(coin.marketCapUsd) > 1000000000 ? `$${(parseFloat(coin.marketCapUsd) / 1000000000).toFixed(1)}B` : `$${(parseFloat(coin.marketCapUsd) / 1000000).toFixed(1)}M`
        // let price = parseFloat(coin.priceUsd) > 0.1 ? parseFloat(coin.priceUsd).toFixed(2) : parseFloat(coin.priceUsd).toFixed(4)
        // let tagName = coin.name.split(' ').join('-').toLowerCase(); 
        
        
        // FOR NOMICS API 

        let price = parseFloat(coin.price) > 0.1 ? parseFloat(coin.price).toFixed(2) : parseFloat(coin.price).toFixed(4)
        let marketCap = parseFloat(coin.market_cap) > 1000000000 ? `$${(parseFloat(coin.market_cap) / 1000000000).toFixed(1)}B` : `$${(parseFloat(coin.market_cap) / 1000000).toFixed(1)}M`
        // let percent = parseFloat(ytd.price_change_pct)
        return (
            <tr>
                <th>
                    {coin.rank}
                </th>

                <th>
                    <div>
                        <img src={`${coin.logo_url}`} width="32" height="32" />
                    </div>
                </th>
                
                <th className="crypto-name">
                    <div>
                        {coin.name} {coin.symbol}
                    </div>
                </th>
                
                <th>
                    {/* {percent}  */}
                </th>

                <th>
                    ${price}
                </th>
                <th>
                    {marketCap}
                </th>
                
            </tr>
        )
    }
}

export default CoinIndexItem

