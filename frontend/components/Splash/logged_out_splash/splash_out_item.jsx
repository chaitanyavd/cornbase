import React from "react";
import { parse } from "querystring";
import { Link } from 'react-router-dom'; 

class SplashOutItem extends React.Component {

    render () {
        return (
            <tr>
                {this.props.coin.name}
            </tr>
        )
    }
}

export default SplashOutItem

