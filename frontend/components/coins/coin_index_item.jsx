import React from "react";
import { parse } from "querystring";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { Link } from "react-router-dom";

class CoinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.isWatchlist = this.isWatchlist.bind(this);
    // this.state = {  coin: {symbol: ""}}
  }

  // componentDidMount() {
  // }

  isWatchlist(id) {
    let watchlists = this.props.watchlists;
    // debugger;
    for (let i = 0; i < watchlists.length; i++) {
      if (watchlists[i].id === id) {
        console.log(id);
        console.log(watchlists[i].id);
        return true;
      }
    }
    return false;
  }

  render() {
    // debugger
    if (this.props.coin === undefined) return null;
    if (this.props.watchlists === undefined) return null;
    const {
      coin,
      fetchYear,
      data,
      deleteWatchlist,
      createWatchlist,
      watchlists
    } = this.props;

    let price = coin.price
      ? parseFloat(coin.price) > 0.1
        ? parseFloat(coin.price).toFixed(2)
        : parseFloat(coin.price).toFixed(4)
      : null;
    let marketCap = coin.market_cap
      ? parseFloat(coin.market_cap) > 1000000000
        ? `$${(parseFloat(coin.market_cap) / 1000000000).toFixed(1)}B`
        : `$${(parseFloat(coin.market_cap) / 1000000).toFixed(1)}M`
      : null;
    let percent = coin.price
      ? parseFloat(coin["1d"].price_change_pct * 100).toFixed(2)
      : null;
    let color = coin.price
      ? percent >= 0
        ? "pospercent"
        : "negpercent"
      : null;
    let percentSymbol = coin.price ? (percent >= 0 ? "+" : "") : null;

    let fill = "rgb(244, 198, 34)";
    let stroke = "rgb(244, 198, 34)";

    // let fill = this.isWatchlist(coin.symbol) ? "rgb(244, 198, 34)" : "blue";
    // let stroke = this.isWatchlist(coin.symbol) ? "rgb(244, 198, 34)" : "blue";
    // let fill = coin.symbol
    //   ? this.isWatchlist(coin.symbol)
    //     ? "rgb(244, 198, 34)"
    //     : "blue"
    //   : "none";

    // let stroke = coin.symbol
    //   ? this.isWatchlist(coin.symbol)
    //     ? "rgb(244, 198, 34)"
    //     : "blue"
    //   : "none";

    // debugger

    const Present = () => (
      <tr>
        <th className="index-th">
          <Link className="crypto-link" to={`/price/${coin.symbol}`}>
            {this.props.orderNum + 1}
          </Link>
        </th>

        <th className="index-th">
          <div className="coin-logo-div">
            <Link className="crypto-link" to={`/price/${coin.symbol}`}>
              <img src={`${coin.logo_url}`} width="32" height="32" />
            </Link>
          </div>
        </th>

        {/* <th className="crypto-name" > */}
        <th className="index-th">
          <div>
            <Link className="crypto-link" to={`/price/${coin.symbol}`}>
              {coin.name} {coin.symbol}
            </Link>
          </div>
        </th>

        <th className="index-th">
          <Link className="crypto-link" to={`/price/${coin.symbol}`}>
            ${price}
          </Link>
        </th>

        <th className="index-th">
          <Link className="crypto-link" to={`/price/${coin.symbol}`}>
            <span className={color}>
              {percentSymbol}
              {percent}%
            </span>
          </Link>
        </th>

        <th className="index-th">
          <Link className="crypto-link" to={`/price/${coin.symbol}`}>
            {marketCap}
          </Link>
        </th>
        <th className="index-th">
          <button
            className="createGridButton"
            onClick={() => createWatchlist(coin)}
          >
            <svg width="23" height="24" viewBox=" 0 0 24 23">
              <path
                stroke={stroke}
                fill={fill}
                d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 0 1 .44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 0 1-1.152.837L12 18.787l-5.938 3.121a.795.795 0 0 1-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 0 1 .44-1.354l6.638-.965 2.968-6.015a.795.795 0 0 1 1.425 0z"
              >
                {" "}
              </path>
              {/* <path stroke={stroke} fill={fill} d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 0 1 .44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 0 1-1.152.837L12 18.787l-5.938 3.121a.795.795 0 0 1-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 0 1 .44-1.354l6.638-.965 2.968-6.015a.795.795 0 0 1 1.425 0z"> </path> */}
            </svg>
          </button>
        </th>
      </tr>
    );

    const Absent = () => (
      <tr id="failed-search-container">
        <th colspan="6" id="failed-search">
          {coin}...
        </th>
      </tr>
    );

    if (typeof coin === "string") {
      return Absent();
    } else {
      return Present();
    }
  }
}

export default CoinIndexItem;
