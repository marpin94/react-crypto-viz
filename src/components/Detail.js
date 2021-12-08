import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

import  Card  from 'react-bootstrap/Card';

export const Detail = ({coinData}) => {

    const location = useLocation();

    const {coin} = location.state


    useEffect(() => {
       console.log(coin)
    }, [])

    return (
        <div>
            <div class ='detail-card'>
                <div className='card-body'>
                    <h1 className='detail-header'>{coin.name}</h1>
                    <p>Price (USD): ${coin.quote.USD.price.toFixed(2)}</p>
                    <p>Market Cap(USD): ${coin.quote.USD.market_cap.toFixed(2)}</p>
                    <p>Volume (24H): ${coin.quote.USD.volume_24h.toFixed(2)}</p>
                </div>
            </div>
            <footer className='detail-footer'>
                <Link to='/' className='link'>Home</Link>
            </footer>
        </div>
    )
}
