import React from "react"; 


export default class CustomTooltip extends React.Component {
    constructor(props) {
    super(props);
    }

    render() {
    const { active } = this.props;

    if (active) {
        const { payload } = this.props;
        if (payload && payload[0] && payload[0].payload) {
        return (
          <div className="custom-tooltip">
            <div className = "tooltip-text">{`$${payload[0].payload.close}`}</div>
          </div>
        );
        }
    }
    return null;
    }
}


