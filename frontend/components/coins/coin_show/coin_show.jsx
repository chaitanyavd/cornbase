import React, {useState, useEffect} from 'react'; 
import { useRouteMatch} from "react-router-dom"; 

import { GridLoader } from "halogenium";
import {CoinChart} from "../coin_chart/coin_chart"; 
import {
    formatCoinInformation,
    formatCoindata,
} from "../coin_util/coin_format"; 
import Transaction from "../transactions/transaction";
import News from "../../news/news";
import {About} from "../coin_info/coin_about";
import { CoinShowHeader } from './coin_show_header';

export default function CoinShow (props) {
    const [active, setActive] = useState("24H")
    const {
        coin,
        data,
        news, 
        metadata,
        fetchCoin,
        fetchAll,
        fetchYear,
        fetchMonth,
        fetchWeek,
        fetchDay,
        fetchHour,
        fetchCoinNews,
        fetchGeneralNews,
        createTransaction,
        fetchTransactions,
        fetchCoinMetadatum,
    } = props; 

    const { params: {symbol}} = useRouteMatch()

    useEffect(() => {
        fetchCoin(symbol)
        fetchDay(symbol)
        fetchGeneralNews(symbol)
        fetchCoinMetadatum(symbol)
    }, [symbol])

    if (coin === undefined || data === undefined)
        return (
            <GridLoader
                id='loader'
                color='rgb(22, 82, 240)'
                size='16px'
                margin='4px'
            />
        );

    const {
        price,
        supply,
        marketCap,
        high,
        volume,
        name,
        rank,
        logo,
    } = formatCoinInformation(coin);
    
    const { color, max, min, change, stroke, fill } = formatCoindata(data);

    return (
        <div className='show-container'>
            <CoinShowHeader
                logo={logo}
                name={name}
                symbol={symbol}
                stroke={stroke}
                fill={fill}
            />

            <div id='body-container'>
                <div id='left-container'>
                    <CoinChart
                        marketCap={marketCap}
                        volume={volume}
                        supply={supply}
                        symbol={symbol}
                        high={high}
                        rank={rank}
                        price={price}
                        change={change}
                        data={data}
                        max={max}
                        min={min}
                        active={active}
                        setActive={setActive}
                        fetchHour={fetchHour}
                        fetchDay={fetchDay}
                        fetchMonth={fetchMonth}
                        fetchYear = {fetchYear}
                        fetchWeek={fetchWeek}
                        fetchAll={fetchAll}
                    />
                    <About metadata={metadata} />
                    <News news={news} />
                </div>

                <div id='right-container'>
                    <Transaction
                        createTransaction={createTransaction}
                        coin={coin}
                    />
                </div>
            </div>
        </div>
    );

}

