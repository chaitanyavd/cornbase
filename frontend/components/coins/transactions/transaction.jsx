import React from 'react'


class Transaction extends React.Component{
    constructor(props) {
        super(props)
        let {coin} = this.props; 

        this.state = {
            ticker: coin.id, 
            price: coin.price, 
            num_coins: 0, 
            order_type: 'buy'
        }
    }


    render(){
        return (
            <div id = "transaction-container">
            </div>
        )
    }
    
}

export default Transaction; 

