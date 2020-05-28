import React from "react";

export const CoinControlbar = (props) => {
    const {
        fetchHour,
        fetchDay,
        fetchWeek,
        fetchMonth,
        fetchYear,
        fetchAll,
        symbol,
        setActive,
        active,
        price,
        change,
    } = props;

    const isActive = (period) => {
        if (period === active) {
            return "active-tp";
        } else {
            return "inactive-tp";
        }
    };

    const setPeriod = (period) => {
        switch (period) {
            case "1H":
                return fetchHour(symbol).then(setActive("1H"));
            case "24H":
                return fetchDay(symbol).then(setActive("24H"));
            case "1W":
                return fetchWeek(symbol).then(setActive("1W"));
            case "1M":
                return fetchMonth(symbol).then(setActive("1M"));
            case "1Y":
                return fetchYear(symbol).then(setActive("1Y"));
            case "ALL":
                return fetchAll(symbol).then(setActive("ALL"));
        }
    };

    return (
        <div className='graph-controlbar-container'>
            <div className='graph-price-content'>
                <PriceInformation price={price} change={change} />
                <PeriodSelectors isActive = {isActive} setPeriod = {setPeriod} />
            </div>
        </div>
    );
};

const PriceInformation = (props) => {
    const { price, change } = props;
    return (
        <div className='graph-price-container'>
            <div className='graph-price-big-number'>
                <span className='dollar-sign'>$</span>
                <span>{price}</span>
            </div>
            <div className='graph-negpercent-change'>
                <span></span>
                <span>${change.toFixed(2)}</span>
                <span></span>
            </div>
        </div>
    );
};

const PeriodSelectors = (props) => {

    const {isActive, setPeriod} = props; 

    return (
        <div className='graph-contolbar-selectors'>
            <div className='period-selector'>
                <button
                    className={isActive("1H")}
                    onClick={() => setPeriod("1H")}>
                    1H
                </button>
            </div>
            <div className='period-selector'>
                <span>
                    <button
                        className={isActive("24H")}
                        onClick={() => setPeriod("24H")}>
                        24H
                    </button>
                </span>
            </div>
            <div className='period-selector'>
                <span>
                    <button
                        className={isActive("1W")}
                        onClick={() => setPeriod("1W")}>
                        1W
                    </button>
                </span>
            </div>
            <div className='period-selector'>
                <span>
                    <button
                        className={isActive("1M")}
                        onClick={() => setPeriod("1M")}>
                        1M
                    </button>
                </span>
            </div>
            <div className='period-selector'>
                <span>
                    <button
                        className={isActive("1Y")}
                        onClick={() => setPeriod("1Y")}>
                        1Y
                    </button>
                </span>
            </div>
            <div className='period-selector'>
                <span>
                    <button
                        className={isActive("ALL")}
                        onClick={() => setPeriod("ALL")}>
                        ALL
                    </button>
                </span>
            </div>
        </div>
    );
}