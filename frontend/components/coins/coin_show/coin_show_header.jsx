import React from 'react'


export const CoinShowHeader = (props) => {

    const {logo, name, symbol, stroke, fill} = props; 
    return (
        <div className='header-container'>
            <div className='header-information'>
                <img
                    className='show-logo'
                    src={`${logo}`}
                    width='80'
                    height='80'
                />
                <div className='header-name'>{name}</div>
                <div className='header-symbol'>({symbol})</div>
            </div>
            <div className='header-following'>
                <button className='show-follow-button'>
                    <div className='show-button-container'>
                        <svg
                            className='show-button-svg'
                            width='23'
                            height='24'
                            viewBox=' 0 0 24 23'>
                            <path
                                stroke={stroke}
                                fill={fill}
                                d='M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 0 1 .44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 0 1-1.152.837L12 18.787l-5.938 3.121a.795.795 0 0 1-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 0 1 .44-1.354l6.638-.965 2.968-6.015a.795.795 0 0 1 1.425 0z'></path>
                        </svg>
                        <div className='show-button-text'>Following</div>
                    </div>
                </button>
            </div>
        </div>
    );
}