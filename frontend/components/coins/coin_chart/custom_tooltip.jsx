import React from "react"; 


export default class CustomTooltip extends React.Component {
    constructor(props) {
    super(props);
    this.formatDate = this.formatDate.bind(this); 
    }

    formatDate(UTC) {
      let utcDate = new Date (UTC * 1000); 
      let date = utcDate.getDate();
      let hour = utcDate.getHours(); 
      let minute = utcDate.getMinutes(); 
      let month = utcDate.getMonth(); 

      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      let hours = {
        0: 12,
        13: 1,
        14: 2,
        15: 3, 
        16: 4, 
        17: 5,
        18: 6,
        19: 7, 
        20: 8, 
        21: 9, 
        22: 10, 
        23: 11  
        }

      if (Object.keys(hours).includes(hour.toString())) {
        return `${months[month]} ${date} ${hours[hour]}:${minute}PM`;
      } else {
        return `${months[month]} ${date} ${hour}:${minute}AM`;
      }

    }
    
    render() {
    const { active, cursorStyle } = this.props;
      console.log(cursorStyle)

    if (active) {
        const { payload } = this.props;
        if (payload && payload[0] && payload[0].payload) {
        return (
          <div className="custom-tooltip">
            <div className = "tooltip-text">{`$${payload[0].payload.close}`}</div>
            <div className = "tooltip-text-date">{this.formatDate(payload[0].payload.time)}</div>
          </div>
        );
        }
    }
    return null;
    }
}


