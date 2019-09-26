import React from "react"; 
import CustomTooltip from './custom_tooltip'; 
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";


class CoinChart extends React.Component{
    constructor(props) {
        super(props)
    }


    render() {
        const {min, max, data} = this.props; 
        return (
          <LineChart
            className="chart"
            width={850}
            height={230}
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="time" hide={true} />
            <YAxis dataKey="close" domain={[min, max]} hide={true} />

            <Tooltip content = {<CustomTooltip label = "price" />}></Tooltip>

            <Line
              className="line"
              cursor="cross-hair"
              type="monotone"
              dataKey="close"
              dot={false}
              strokeWidth={1.75}
              stroke="rgb(22, 82, 240)"
              yAxisId={0}
            />
          </LineChart>
        );
    }
    
}


export default CoinChart; 

