import React from "react"; 
import { parse } from "querystring";
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import {Link} from 'react-router-dom'; 


class CoinIndexItem extends React.Component {

    // ! There has to be a better way 
    // componentDidMount() {
    //     const symbol = this.props.coin.symbol; 
    //     this.props.fetchYear(symbol); 
    //     // debugger
    // }
    //!
    
    // ! There has to be a better way 
    // componentDidUpdate(prevProps) {
    //     const symbol = this.props.coin.symbol;
    //     if (symbol !== prevProps.symbol) {
    //         this.props.fetchYear(symbol);
    //     }
    // }
    //!

    render() {

        if (this.props.coin === undefined) return null;
        const {coin, fetchYear, data} = this.props; 



        // ! There has to be a better way 
        // FOR COINCAP API 
        // let color = parseFloat(coin.changePercent24Hr).toFixed(2) >= 0 ? 'pospercent' : 'negpercent'; 
        // let marketCap = parseFloat(coin.marketCapUsd) > 1000000000 ? `$${(parseFloat(coin.marketCapUsd) / 1000000000).toFixed(1)}B` : `$${(parseFloat(coin.marketCapUsd) / 1000000).toFixed(1)}M`
        // let price = parseFloat(coin.priceUsd) > 0.1 ? parseFloat(coin.priceUsd).toFixed(2) : parseFloat(coin.priceUsd).toFixed(4)
        // let tagName = coin.name.split(' ').join('-').toLowerCase(); 
        //!
        
        let price = coin.price ? parseFloat(coin.price) > 0.1 ? parseFloat(coin.price).toFixed(2) : parseFloat(coin.price).toFixed(4) : null 
        let marketCap = coin.market_cap ? parseFloat(coin.market_cap) > 1000000000 ? `$${(parseFloat(coin.market_cap) / 1000000000).toFixed(1)}B` : `$${(parseFloat(coin.market_cap) / 1000000).toFixed(1)}M` : null 
        let percent = coin.price ? parseFloat((coin["1d"].price_change_pct)*100).toFixed(2) : null 
        let color = coin.price ? percent >= 0 ? 'pospercent' : 'negpercent' : null 



        const Present = () => (
            <tr>
                <th className = "index-th">
                    {this.props.orderNum + 1}
                </th>

                <th className="index-th">
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
                
                <th className="index-th" >
                    ${price}
                </th>
                
                <th className={color}>
                    {percent}%
                </th>

                <th className="index-th" >
                    {marketCap}
                </th>
            </tr>
        )

        const Absent = ()=> (

            <tr id = "failed-search-container">
                <th id = "failed-search">
                    {coin}...
                </th>
            </tr>
        )
        
        
        if (typeof coin === "string") {
             return Absent()
        } else {
             return Present(); 
        }

    }

}

export default CoinIndexItem

