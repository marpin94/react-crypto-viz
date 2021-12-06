import React, { useEffect, useState } from 'react'

export const Filter = ({getData}) => {

    const [filter, setFilter] = useState()

    const onChange = (e) => {
        setFilter(e.target.value)
    }
    
    useEffect(() => {
        getData(filter)
    }, [filter])

    return (
        <div>
            <h3>View Top: </h3>
            <form>
                <select name='filterSelect' onChange={onChange}>
                    <option value = '10'>10</option>
                    <option value = '25'>25</option>
                    <option value = '50'>50</option>
                </select>
            </form>
        </div>
    )
}
