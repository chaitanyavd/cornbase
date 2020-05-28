import React from 'react'
import {CoinHighlights} from "../coin_info/coin_highlights"
import {CoinLineChart} from "./coin_line_chart"
import {CoinControlbar} from "./coin_controlbar"


export const CoinChart =  (props) =>  {
    const {
        marketCap,
        volume,
        supply,
        symbol,
        high,
        rank,
        price,
        change,
        data,
        max,
        min,
        active,
        setActive,
        fetchHour,
        fetchDay,
        fetchMonth,
        fetchWeek,
        fetchYear,
        fetchAll,
    } = props; 

    return (
        <div className='graph-column'>
            <CoinControlbar
                fetchAll={fetchAll}
                fetchDay={fetchDay}
                fetchMonth={fetchMonth}
                fetchYear = {fetchYear}
                fetchHour={fetchHour}
                fetchWeek={fetchWeek}
                symbol={symbol}
                setActive={setActive}
                active={active}
                price={price}
                change={change}
            />
            <CoinLineChart data={data} max={max} min={min} />
            <CoinHighlights
                marketCap={marketCap}
                volume={volume}
                supply={supply}
                symbol={symbol}
                high={high}
                rank={rank}
            />
        </div>
    );
}

