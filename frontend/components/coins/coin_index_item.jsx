import React from "react"; 
import { parse } from "querystring";
import {Link} from 'react-router-dom'; 


class CoinIndexItem extends React.Component {

    render() {
        if (this.props.coin === undefined) return null;
        const {coin} = this.props; 

        // debugger 
        // ? There has to be a better way 

        // * FOR COINCAP API 
        // * let color = parseFloat(coin.changePercent24Hr).toFixed(2) >= 0 ? 'pospercent' : 'negpercent'; 
        // * let marketCap = parseFloat(coin.marketCapUsd) > 1000000000 ? `$${(parseFloat(coin.marketCapUsd) / 1000000000).toFixed(1)}B` : `$${(parseFloat(coin.marketCapUsd) / 1000000).toFixed(1)}M`
        // * let price = parseFloat(coin.priceUsd) > 0.1 ? parseFloat(coin.priceUsd).toFixed(2) : parseFloat(coin.priceUsd).toFixed(4)
        // * let tagName = coin.name.split(' ').join('-').toLowerCase(); 
        
        
        // *FOR NOMICS API 

        let price = parseFloat(coin.price) > 0.1 ? parseFloat(coin.price).toFixed(2) : parseFloat(coin.price).toFixed(4)
        let marketCap = parseFloat(coin.market_cap) > 1000000000 ? `$${(parseFloat(coin.market_cap) / 1000000000).toFixed(1)}B` : `$${(parseFloat(coin.market_cap) / 1000000).toFixed(1)}M`
        let percent = parseFloat((coin["1d"].price_change_pct)*100).toFixed(2); 
        let color = percent >= 0 ? 'pospercent' : 'negpercent'


        return (
            <tr>
                <th>
                    {this.props.orderNum + 1}
                </th>

                <th>
                    <div>
                        <img src={`${coin.logo_url}`} width="32" height="32" />
                    </div>
                </th>
                
                <th className="crypto-name" >
                    <div>

                        <Link className = "crypto-link" to = {`/price/${coin.symbol}`}>
                            {coin.name} {coin.symbol}
                        </Link>
                    </div>
                </th>
                
                <th>
                    ${price}
                </th>
                <th className = {color}>
                    {percent}%
                </th>

                <th>
                    {marketCap}
                </th>
                <th>
                    CHARTGOESHERE
                </th>
                
            </tr>
        )
    }
}

export default CoinIndexItem

