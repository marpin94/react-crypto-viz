import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

import { PriceChart } from './PriceChart';

export const Detail = ({coinData}) => {

    const location = useLocation();

    const {coin} = location.state

    // const pageCoin = coinData.filter(coin => coin.id === params.id)

    useEffect(() => {
       console.log(coin)
    }, [])

    return (
        <div>
            <h1 className='detail-header'>{coin.name}</h1>
            <p>Price (USD): {Math.round(coin.quote.USD.price)}</p>
            <p>Market Cap(USD): {coin.quote.USD.market_cap}</p>
            <p>Volume (24H): {coin.quote.USD.volume_24h}</p>
            <Link to='/' className='link'>Home</Link>
        </div>
    )
}
