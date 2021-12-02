import React from 'react'
import { CoinCard } from './CoinCard'




export const HomeDisplay = ({coinData}) => {


    return (
        <table className ='home-display'>
            <tbody>
            <tr>
                <th>Coin</th>
                <th>Symbol</th>
                <th>Latest Quote (USD)</th>
            </tr>
            {coinData &&
                coinData.map(coin => {
                    return(
                        <CoinCard coin={coin}/>
                   )
                })
            }
            </tbody>
        </table>
    )
}
