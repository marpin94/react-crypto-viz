import React from 'react'
import { Link } from 'react-router-dom'

export const CoinCard = ({coin}) => {

    

    return (
        <tr className='coin-card'>
            <td><Link to = {`/detail/${coin.id}`} state={{coin}} className='link'>{coin.name}</Link></td>
            <td><h2>{coin.symbol}</h2></td>
            <td><p>{coin.quote.USD.price}</p></td>
            <td>{coin.quote.USD.percent_change_24h > 0 ? '+':'-'}{`${coin.quote.USD.percent_change_24h} %`}</td>
        </tr>
    )
}
