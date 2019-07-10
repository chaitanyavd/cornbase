import React from "react"; 
import CoinIndexItem from "./coin_index_item"; 


class CoinIndex extends React.Component {

    componentDidMount() {
        this.props.fetchCoins(); 

    }



    render() {
        const {coins, fetchCoin, fetchYear, data} = this.props

        const mapper =  coins.map((coin, idx) => <CoinIndexItem coin={coin} orderNum={idx} fetchCoin={fetchCoin} key={coin.id} fetchYear = {fetchYear} data = {data} />) 

        // debugger 
        return (
            <div className = "index-table-container">
                    <table className = "index-table">
                        <tbody>
                        <tr>
                            <th className= "tableheader">Available on Coinbase</th>
                        </tr>
                        
                        <tr className = "tabletitles">
                            <th className = "ttiles">#</th>
                            <th>NAME</th>
                            <th></th>
                            <th>PRICE</th>
                            <th>CHANGE</th>
                            <th>MARKET CAP</th>

                        </tr>
                        
                            {mapper}

                        </tbody>
                    </table>
               
            </div>
        )
    }
    
}

export default CoinIndex; 

