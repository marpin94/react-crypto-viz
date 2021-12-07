import React, {useState } from 'react'
import Form  from 'react-bootstrap/Form'

export const Filter = ({getData}) => {

    const [filter, setFilter] = useState()

    const onChange = (e) => {
        setFilter(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        getData(filter)
    }
    

    return (
        <div className='filter'>
            
            <Form onSubmit ={handleSubmit} className='filter-form'>
            <h3>View Top: </h3>
                <Form.Select name='filterSelect' onChange={onChange}>
                    <option value = '10'>10</option>
                    <option value = '25'>25</option>
                    <option value = '50'>50</option>
                </Form.Select>
                <button type='submit'>Submit</button>
            </Form>
        </div>
    )
}
