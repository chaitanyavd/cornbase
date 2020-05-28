import React from 'react'


export const CoinHighlights = (props ) => {

    const {marketCap, volume, supply, symbol, high, rank} = props; 

    return (
        <div className='graph-assets-container'>
            <div className='graph-asset'>
                <div className='graph-asset-title'>
                    <span>Market cap</span>
                </div>
                <div className='graph-asset-value'>
                    <span>{marketCap}</span>
                </div>
            </div>
            <div className='graph-asset'>
                <div className='graph-asset-title'>
                    <span>Volume (24 hrs)</span>
                </div>
                <div className='graph-asset-value'>
                    <span>{volume}</span>
                </div>
            </div>
            <div className='graph-asset'>
                <div className='graph-asset-title'>
                    <span>Circulating Supply</span>
                </div>
                <div className='graph-asset-value'>
                    <span>
                        {supply} {symbol}
                    </span>
                </div>
            </div>
            <div className='graph-asset'>
                <div className='graph-asset-title'>
                    <span>All-time high</span>
                </div>
                <div className='graph-asset-value'>
                    <span>${high}</span>
                </div>
            </div>
            <div className='graph-asset'>
                <div className='graph-asset-title'>
                    <span>Popularity on Cornbase</span>
                </div>
                <div className='graph-asset-value'>
                    <span>#{rank} most held</span>
                </div>
            </div>
        </div>
    );
} 