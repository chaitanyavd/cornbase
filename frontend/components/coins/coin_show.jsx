import React from 'react'; 
// import coin_index_container from './coin_index_container';

class CoinShow extends React.Component {

    componentDidMount() {
        // const symbol = this.props.match.params.symbol;
        // if (!this.props.coin) {
        //     this.props.fetchCoin(symbol);
        // }
        // debugger
        this.props.fetchCoin(this.props.match.params.symbol)

    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.match.params.symbol !== prevProps.match.params.symbol) {
    //         const symbol = this.props.match.params.symbol;
    //         this.props.fetchCoin(symbol);
    //     }
    // }

    render () { 

        // const coin = this.props.coin[0]
        const coin = this.props.coin[0] ? this.props.coin[0] : []
        // debugger 

        // const coin = this.props.coin ? this.props.coin : []
        // if (!coin) return null; 
                // const blankCoin = { name: 'blank' }
                // const coin = this.props.coin ? this.props.coin : blankCoin
                // debugger 

        return (
            <div className = "test">
                {/* {this.props.symbol} */}
                {coin.name}
                {coin.price}
                {coin.market_cap}
            </div>
        )
    }

}

export default CoinShow


