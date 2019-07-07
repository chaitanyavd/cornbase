import React from "react"; 

const CoinIndexItem = ({coin, fetchCoin}) => (
    <tr>
        <th>
            {coin.name} {coin.ticker}
        </th>
        <th>
            10 Corns
        </th>
        <th>
            100000 Corns
        </th>
    </tr>
)

export default CoinIndexItem


