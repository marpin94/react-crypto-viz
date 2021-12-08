import React from 'react'
import { Link } from 'react-router-dom'

export const CoinCard = ({coin}) => {

    

    return (
        <tr className='coin-card'>
            <td className='tbl-sm'><Link to = {`/detail/${coin.id}`} state={{coin}} className='link'>{coin.name}</Link></td>
            <td><h2>{coin.symbol}</h2></td>
            <td><p>${coin.quote.USD.price.toFixed(2)}</p></td>
            <td className='tbl-sm'>{coin.quote.USD.percent_change_24h > 0 ? '+':''}{`${coin.quote.USD.percent_change_24h.toFixed(2)} %`}</td>
        </tr>
    )
}
