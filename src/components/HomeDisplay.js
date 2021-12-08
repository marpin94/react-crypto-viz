import React from 'react'
import { CoinCard } from './CoinCard'
import { Filter } from './Filter'

import Table  from 'react-bootstrap/Table'



export const HomeDisplay = ({coinData, getData}) => {


    return (
        <>
        <Filter getData={getData}/>
        <table className ='home-display'>
            <thead>
            <tr>
                <th className='tbl-sm'>Coin</th>
                <th>Symbol</th>
                <th>Latest Quote (USD)</th>
                <th className='tbl-sm'>Price Change (24H)</th>
            </tr>
            </thead>
            <tbody>
            {coinData &&
                coinData.map(coin => {
                    return(
                        <CoinCard key={coin.id} coin={coin}/>
                   )
                })
            }
            </tbody>
        </table>
        </>
    )
}
