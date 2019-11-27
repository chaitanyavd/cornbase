import React from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
class WatchlistGridItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDay(this.props.watchlist.symbol);
  }

  render() {
    const { watchlist, deleteWatchlist, orderNum, fetchDay } = this.props;

    if (this.props.watchlist === undefined) return null;

    let price = watchlist.price
      ? parseFloat(watchlist.price) > 0.1
        ? parseFloat(watchlist.price).toFixed(2)
        : parseFloat(watchlist.price).toFixed(4)
      : null;
    let marketCap = watchlist.market_cap
      ? parseFloat(watchlist.market_cap) > 1000000000
        ? `$${(parseFloat(watchlist.market_cap) / 1000000000).toFixed(1)}B`
        : `$${(parseFloat(watchlist.market_cap) / 1000000).toFixed(1)}M`
      : null;
    let percent = watchlist.price
      ? parseFloat(watchlist["1d"].price_change_pct * 100).toFixed(2)
      : null;
    let percentSymbol = watchlist.price ? (percent >= 0 ? "+" : "") : null;
    let color = watchlist.price
      ? percent >= 0
        ? "pospercent"
        : "negpercent"
      : null;
    let fill = "rgb(244, 198, 34)";
    let stroke = watchlist.price
      ? percent >= 0
        ? "rgb(5,177,105)"
        : "rgb(223,95,103)"
      : null; 


    // debugger;
    const close = this.props.data.length
      ? this.props.data.map(object => object.close)
      : [];
    // const close = this.props.data ? this.props.data.map((object) => (object.close)) : []
    // const close = (this.props.data === []) ? [] : this.props.data.map((object) => (object.close)) //? tried to reverse the logic -- but problem persists
    let min = -Infinity;
    let max = Infinity;
    if (close.length >= 1) {
      min = close.reduce((acc, el) => Math.min(acc, el));
      max = close.reduce((acc, el) => Math.max(acc, el));
    }

    return (
      <Link className="grid-link" to={`/price/${watchlist.symbol}`}>
        <div className="watchlist-grid-wrapper">
          <div className="watchlist-grid-header-container">
            <div className="grid-name-logo">
              <img
                className="grid-img"
                src={`${this.props.watchlist.logo_url}`}
                width="24"
                height="24"
              />
              <h3 className="grid-name">{watchlist.name}</h3>
            </div>
            <div className="grid-timeperiod">
              <span>24H</span>
            </div>
          </div>
          <div className="watchlist-grid-header-container">
            <div className="grid-name-logo">
              <h3 className="grid-price">${price}</h3>
            </div>
            <div className={color}>
              <span>{percentSymbol}{percent}%</span>
            </div>
          </div>
          <div className="watchlist-grid-graph-container">
            <LineChart
              className="grid-chart"
              width={359.70}
              height={100}
              data={this.props.data}
              zIndex="1"
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="time" hide={true} />
              <YAxis dataKey="close" domain={[min, max]} hide={true} />
              <Line
                className="line"
                cursor="cross-hair"
                type="monotone"
                dataKey="close"
                dot={false}
                strokeWidth={1.75}
                stroke={stroke}
                yAxisId={0}
              />
            </LineChart>
          </div>
        </div>
      </Link>
    );
  }
}

export default WatchlistGridItem;
