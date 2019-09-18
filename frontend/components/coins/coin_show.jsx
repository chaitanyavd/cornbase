import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { GridLoader } from 'halogenium';

class CoinShow extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { active: "24H"}
    }
    

    componentDidMount() {
        this.props.fetchCoin(this.props.match.params.symbol);
        this.props.fetchDay(this.props.match.params.symbol);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.symbol !== prevProps.match.params.symbol) {
            const symbol = this.props.match.params.symbol;
            this.props.fetchCoin(symbol);
            this.props.fetchAll(symbol);
            this.props.fetchYear(symbol);
            this.props.fetchMonth(symbol);
            this.props.fetchWeek(symbol);
            this.props.fetchDay(symbol);
            this.props.fetchHour(symbol);
        }
    }

    render() {

        if (this.props.coin === undefined) return <GridLoader id="loader" color="rgb(22, 82, 240)" size="16px" margin="4px" />;

        const coin = this.props.coin ? this.props.coin : []

        let marketCap = parseFloat(coin.market_cap) > 1000000000 ? `$${(parseFloat(coin.market_cap) / 1000000000).toFixed(1)}B` : `$${(parseFloat(coin.market_cap) / 1000000).toFixed(1)}M`
        let circSupply = parseFloat(coin.circulating_supply) > 1000000000 ? `${(parseFloat(coin.circulating_supply) / 1000000000).toFixed(1)}B ${coin.symbol}` : `${(parseFloat(coin.circulating_supply) / 1000000).toFixed(1)}M ${coin.symbol}`
        let allTimeHigh = parseFloat(coin.high) > 0.1 ? parseFloat(coin.high).toFixed(2) : parseFloat(coin.high).toFixed(4)
        let price = parseFloat(coin.price) > 0.1 ? parseFloat(coin.price).toFixed(2) : parseFloat(coin.price).toFixed(4)
        let volume = parseFloat(coin["1d"].volume) > 1000000000 ? `$${(parseFloat(coin["1d"].volume) / 1000000000).toFixed(1)}B` : `$${(parseFloat(coin["1d"].volume) / 1000000).toFixed(1)}M`
        // debugger 
        const close = this.props.data  ? this.props.data.map((object) => (object.close)) : []
        // const close = (this.props.data === {}) ? [] : this.props.data.map((object) => (object.close)) //? tried to reverse the logic -- but problem persists
        let min = -Infinity;
        let max = Infinity;
        if (close.length >= 1) {
            min = close.reduce((acc, el) => (Math.min(acc, el)));
            max = close.reduce((acc, el) => (Math.max(acc, el)));
        }
        let change = max - min; 
        // let change = this.props.data ? this.props.data[this.props.data.length - 1].close - this.props.data[0].close : 0
        // let color = change ? change >= 0 ? 'graph-pospercent-change' : 'graph-negpercent-change' : null 
        // debugger

        return (
            <div className="show-container">
                <div className="header-container">
                    <div className="header-information" >
                        <img className="show-logo" src={`${coin.logo_url}`} width="80" height="80" />
                        <div className="header-name">
                            {coin.name}
                        </div>
                        <div className="header-symbol">
                            ({coin.symbol})
                        </div>
                    </div>
                </div>
                <div className="graph-column">
                    <div className="graph-controlbar-container">
                        <div className="graph-price-content">
                            <div className="graph-price-container">
                                <div className="graph-price-big-number">
                                    <span className="dollar-sign">$</span>
                                    <span>{price}</span>
                                </div>
                                <div className="graph-negpercent-change">
                                    <span></span>
                                    <span>${change.toFixed(2)}</span>
                                    <span></span>
                                </div>
                            </div>

                            <div className="graph-contolbar-selectors">
                                <div className="period-selector">
                                    <span><button className={ this.state.active === "1H" ? "active-tp" : "inactive-tp" } onClick={() => this.props.fetchHour(coin.symbol).then(this.setState({ active: "1H"}))}>1H</button></span>
                                </div>
                                <div className="period-selector">
                                    <span><button className={ this.state.active === "24H" ? "active-tp" : "inactive-tp" } onClick={() => this.props.fetchDay(coin.symbol).then(this.setState({ active: "24H" }))}>24H</button></span>
                                </div>
                                <div className="period-selector">
                                    <span><button className={ this.state.active === "1W" ? "active-tp" : "inactive-tp" } onClick={() => this.props.fetchWeek(coin.symbol).then(this.setState({ active: "1W" }))}>1W</button></span>
                                </div>
                                <div className="period-selector">
                                    <span><button className={ this.state.active === "1M" ? "active-tp" : "inactive-tp" } onClick={() => this.props.fetchMonth(coin.symbol).then(this.setState({ active: "1M" }))}>1M</button></span>
                                </div>
                                <div className="period-selector">
                                    <span><button className={ this.state.active === "1Y" ? "active-tp" : "inactive-tp" } onClick={() => this.props.fetchYear(coin.symbol).then(this.setState({ active: "1Y" }))}>1Y</button></span>
                                </div>
                                <div className="period-selector">
                                    <span><button className={ this.state.active === "ALL" ? "active-tp" : "inactive-tp" } onClick={() => this.props.fetchAll(coin.symbol).then(this.setState({ active: "ALL" }))}>ALL</button></span>
                                </div>

                            </div>

                        </div>
                    </div>

                    <LineChart className='chart'
                        width={784}
                        height={230}
                        data={this.props.data}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                        <XAxis dataKey="time" hide={true} />
                        <YAxis dataKey="close" domain={[min, max]} hide={true} />

                        {/* <Tooltip className="tooltip" /> */}
                        <Tooltip className="tooltip" labelStyle={{ display: 'none', text: "price" }} itemStyle={{ backgroundColor: "#34343b", fontSize: 22, color: "white", margin: "0", outline: "none" }} />

                        <Line className="line" cursor="cross-hair" type="monotone" dataKey="close" dot={false} strokeWidth={1.75} stroke='rgb(22, 82, 240)' yAxisId={0} />
                    </LineChart>

                    <div className="horizontal-axis">
                    </div>
                    <div className="graph-assets-container">
                        <div className="graph-asset">
                            <div className="graph-asset-title">
                                <span>Market cap</span>
                            </div>
                            <div className="graph-asset-value">
                                <span>{marketCap}</span>
                            </div>
                        </div>
                        <div className="graph-asset">
                            <div className="graph-asset-title">
                                <span>Volume (24 hrs)</span>
                            </div>
                            <div className="graph-asset-value">
                                <span>{volume}</span>
                            </div>
                        </div>
                        <div className="graph-asset">
                            <div className="graph-asset-title">
                                <span>Circulating Supply</span>
                            </div>
                            <div className="graph-asset-value">
                                <span>{circSupply}</span>
                            </div>
                        </div>
                        <div className="graph-asset">
                            <div className="graph-asset-title">
                                <span>All-time high</span>
                            </div>
                            <div className="graph-asset-value">
                                <span>${allTimeHigh}</span>
                            </div>
                        </div>
                        <div className="graph-asset">
                            <div className="graph-asset-title">
                                <span>Popularity on Cornbase</span>
                            </div>
                            <div className="graph-asset-value">
                                <span>#{coin.rank} most held</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CoinShow