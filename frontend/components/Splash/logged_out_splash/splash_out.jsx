import SplashOutItem from '../logged_out_splash/splash_out_item';
import React from "react";

class SplashOut extends React.Component {



    componentDidMount() {
        this.props.fetchSplashCoins();
    }

    render() {

        const { coins } = this.props;
        const mapper = coins.map((coin, idx) => {
            if (idx <= 5) {
                return <SplashOutItem coin={coin} orderNum={idx} key={coin.id} />
            } else {
                return null
            }
        });


        return (
            <div className="splashout-container">
                <div className="splashout-home-backdrop">
                    <div className="splashout-header-section">
                        <div className="splashout-header-container">
                            <h2 className="splashout-title">Buy and sell cryptocorns</h2>
                            <p className="splashout-para" >"Cornbase is the easiest place to buy, sell, and manage your cryptocorn portfolio."</p>
                            <form className="splashout-get-started-form">
                                <input className="splashout-email" type="email" placeholder="Email address" spellCheck="false" />
                                <button className="splashout-button" ><span className="splashout-button-text">Get Started</span></button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="splashout-table-backdrop" >
                    <div className="splashout-table-container">
                        <table className="splashout-table" >

                            <colgroup>
                                <col style={{ width: "32px" }} />
                            </colgroup>

                            <thead className="splashout-table-head">
                                <tr>
                                    <th className="splashout-tablehelpers">
                                        <div className="splashout-tablehelper-div">
                                            <span className="tablehead">#</span>
                                        </div>
                                    </th>
                                    <th className="splashout-tablehelpers">
                                        <div className="splashout-tablehelper-div">
                                            <span className="tablehead">NAME</span>
                                        </div>
                                    </th>
                                    <th className="splashout-tablehelpers">
                                        <div className="splashout-tablehelper-div">
                                            <span className="tablehead">PRICE</span>
                                        </div>
                                    </th>
                                    <th className="splashout-tablehelpers">
                                        <div className="splashout-tablehelper-div">
                                            <span className="tablehead">CHANGE</span>
                                        </div>
                                    </th>

                                </tr>

                            </thead>
                            <tbody className="t-body">
                                {mapper}
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        )
    }

}


export default SplashOut
