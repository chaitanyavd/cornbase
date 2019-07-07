import React from "react"; 

// const CoinIndexItem = ({coin, fetchCoin}) => (
//     <tr>
//         <th>
//             {coin.rank}
//         </th>
//         <th>
//             {coin.name} {coin.symbol}
//         </th>
//         <th>
//             {parseFloat(coin.changePercent24Hr).toFixed(2)}%
//         </th>
//         <th>
//             ${parseFloat(coin.priceUsd).toFixed(2)}
//         </th>
//         <th>
//             ${(parseFloat(coin.marketCapUsd) / 1000000000).toFixed(1)}B
//         </th>
//     </tr>
// )

// export default CoinIndexItem


// parseFloat(coin.priceUsd).formatMoney(),

class CoinIndexItem extends React.Component {

    // Trying to change % color to green/red based on + or -
    // percentChange() {
    //     let percentChange = parseFloat(this.props.coin.changePercent24Hr).toFixed(2); 
    //     let res = document.querySelector('.percent-change')
    //     res.style.color = percentChange >= 0 ? 'green' : 'red';
    //     return percentChange
    // }

    render() {

        const {coin, fetchCoin} = this.props; 
        return (
            <tr>
                <th>
                    {coin.rank}
                </th>
                <th>
                    {coin.name} {coin.symbol}
                </th>
                <th className= "percent-change">
                    {parseFloat(this.props.coin.changePercent24Hr).toFixed(2)}%
                </th>
                <th>
                    ${parseFloat(coin.priceUsd).toFixed(2)}
                </th>
                <th>
                    ${(parseFloat(coin.marketCapUsd) / 1000000000).toFixed(1)}B
                </th>
            </tr>
        )
    }
}

export default CoinIndexItem