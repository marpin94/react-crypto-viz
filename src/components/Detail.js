import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

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
           <Link to='/' className='link'>Home</Link>
        </div>
    )
}
