import React from "react"; 
import CoinIndexItem from "./coin_index_item"; 


class CoinIndex extends React.Component {

    componentDidMount() {
        this.props.fetchCoins(); 
        // debugger
    }



    render() {
        const {coins, fetchCoin} = this.props
        // debugger 
        return (
            <div className = "index-table-container">
                    <table className = "index-table">
                        <tbody>
                        <tr>
                            <th className= "tableheader">Available on Coinbase</th>
                        </tr>
                        
                        <tr className = "tabletitles">
                            <th>#</th>
                            <th>NAME</th>
                            <th></th>
                            <th>CHANGE</th>
                            <th>PRICE</th>
                            <th>MARKET CAP</th>
                        </tr>
                        
                            {coins.map((coin)=> <CoinIndexItem coin = {coin} fetchCoin = {fetchCoin} key = {coin.id} />)}

                        </tbody>
                    </table>
               
            </div>
        )
    }
    
}

export default CoinIndex; 

