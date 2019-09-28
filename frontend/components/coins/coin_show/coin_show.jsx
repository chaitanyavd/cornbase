import React from 'react';
import { GridLoader } from 'halogenium';
import CoinChart from '../coin_chart/coin_chart'
import Transaction from '../transactions/transaction'; 
import News from "../../news/news"; 
import About from '../metadata/coin_metadata'
class CoinShow extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { active: "24H"}
    }
    

    componentDidMount() {
        this.props.fetchCoin(this.props.match.params.symbol);
        this.props.fetchDay(this.props.match.params.symbol); 
        this.props.fetchGeneralNews();
        this.props.fetchCoinMetadatum(this.props.match.params.symbol);  
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
        // debugger 
        const coin = this.props.coin ? this.props.coin : []
        let marketCap = parseFloat(coin.market_cap) > 1000000000 ? `$${(parseFloat(coin.market_cap) / 1000000000).toFixed(1)}B` : `$${(parseFloat(coin.market_cap) / 1000000).toFixed(1)}M`
        let circSupply = parseFloat(coin.circulating_supply) > 1000000000 ? `${(parseFloat(coin.circulating_supply) / 1000000000).toFixed(1)}B ${coin.symbol}` : `${(parseFloat(coin.circulating_supply) / 1000000).toFixed(1)}M ${coin.symbol}`
        let allTimeHigh = parseFloat(coin.high) > 0.1 ? parseFloat(coin.high).toFixed(2) : parseFloat(coin.high).toFixed(4)
        let price = parseFloat(coin.price) > 0.1 ? parseFloat(coin.price).toFixed(2) : parseFloat(coin.price).toFixed(4)
        let volume = parseFloat(coin["1d"].volume) > 1000000000 ? `$${(parseFloat(coin["1d"].volume) / 1000000000).toFixed(1)}B` : `$${(parseFloat(coin["1d"].volume) / 1000000).toFixed(1)}M`
        const close = this.props.data.length ? this.props.data.map((object) => (object.close)) : [];
        
        let min = -Infinity;
        let max = Infinity;
        if (close.length >= 1) {
            min = close.reduce((acc, el) => (Math.min(acc, el)));
            max = close.reduce((acc, el) => (Math.max(acc, el)));
        }
        let change = max - min; 

        let color = change ? change >= 0 ? 'graph-pospercent-change' : 'graph-negpercent-change' : null 
        let fill = "rgb(244, 198, 34)";
        let stroke = "rgb(244, 198, 34)";

        return (
          <div className="show-container">
            <div className="header-container">
              <div className="header-information">
                <img
                  className="show-logo"
                  src={`${coin.logo_url}`}
                  width="80"
                  height="80"
                />
                <div className="header-name">{coin.name}</div>
                <div className="header-symbol">({coin.symbol})</div>
              </div>
              <div className = "header-following">
                <button className = "show-follow-button">
                  <div className = "show-button-container">
                    <svg className = "show-button-svg" width="23" height="24" viewBox=" 0 0 24 23">
                      <path
                        stroke={stroke}
                        fill={fill}
                        d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 0 1 .44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 0 1-1.152.837L12 18.787l-5.938 3.121a.795.795 0 0 1-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 0 1 .44-1.354l6.638-.965 2.968-6.015a.795.795 0 0 1 1.425 0z"
                      >
                      </path>
                    </svg>
                    <div className = "show-button-text">Following</div>
                  </div>
                </button>
              </div>
            </div>
            <div id="body-container">
              <div id="left-container">
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
                          <span>
                            <button
                              className={
                                this.state.active === "1H"
                                  ? "active-tp"
                                  : "inactive-tp"
                              }
                              onClick={() =>
                                this.props
                                  .fetchHour(coin.symbol)
                                  .then(this.setState({ active: "1H" }))
                              }
                            >
                              1H
                            </button>
                          </span>
                        </div>
                        <div className="period-selector">
                          <span>
                            <button
                              className={
                                this.state.active === "24H"
                                  ? "active-tp"
                                  : "inactive-tp"
                              }
                              onClick={() =>
                                this.props
                                  .fetchDay(coin.symbol)
                                  .then(this.setState({ active: "24H" }))
                              }
                            >
                              24H
                            </button>
                          </span>
                        </div>
                        <div className="period-selector">
                          <span>
                            <button
                              className={
                                this.state.active === "1W"
                                  ? "active-tp"
                                  : "inactive-tp"
                              }
                              onClick={() =>
                                this.props
                                  .fetchWeek(coin.symbol)
                                  .then(this.setState({ active: "1W" }))
                              }
                            >
                              1W
                            </button>
                          </span>
                        </div>
                        <div className="period-selector">
                          <span>
                            <button
                              className={
                                this.state.active === "1M"
                                  ? "active-tp"
                                  : "inactive-tp"
                              }
                              onClick={() =>
                                this.props
                                  .fetchMonth(coin.symbol)
                                  .then(this.setState({ active: "1M" }))
                              }
                            >
                              1M
                            </button>
                          </span>
                        </div>
                        <div className="period-selector">
                          <span>
                            <button
                              className={
                                this.state.active === "1Y"
                                  ? "active-tp"
                                  : "inactive-tp"
                              }
                              onClick={() =>
                                this.props
                                  .fetchYear(coin.symbol)
                                  .then(this.setState({ active: "1Y" }))
                              }
                            >
                              1Y
                            </button>
                          </span>
                        </div>
                        <div className="period-selector">
                          <span>
                            <button
                              className={
                                this.state.active === "ALL"
                                  ? "active-tp"
                                  : "inactive-tp"
                              }
                              onClick={() =>
                                this.props
                                  .fetchAll(coin.symbol)
                                  .then(this.setState({ active: "ALL" }))
                              }
                            >
                              ALL
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CoinChart data={this.props.data} max={max} min={min} />

                  <div className="horizontal-axis"></div>
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
                <div className="about-container">
                  <About metadata={this.props.metadata} />
                </div>
                <div className="news-container">
                  <News news={this.props.news} />
                </div>
              </div>
              <div id="right-container">
                <Transaction />
              </div>
            </div>
          </div>
        );
    }

}

export default CoinShow
