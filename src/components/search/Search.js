import React, { useEffect, useState } from 'react'
import './search.css'
import { Link } from 'react-router-dom';
import Students from '../data/Students';

function Search() {
    const [inputVal, setInputVal] = useState('');
    const [list, setList] = useState([]);
    useEffect(() => {
        const findMany = Students.filter((std) => {
            return (
                std.name.toLowerCase().includes(inputVal) ||
                std.rollno.toLowerCase().includes(inputVal)
            )
        })
        setList(findMany)
    }, [inputVal])
    return (
        <>
            <div>
                <div className='search_inputDiv'>
                    <input type='text' placeholder='Search by Name or Roll No.'
                        onChange={(e) => setInputVal(e.target.value)} />
                </div>
                <div className='search_tableDiv'>
                    <table className='search_table'>
                        <tbody>
                            <tr className='search_tableHead'>
                                <th>Roll No.</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Check-In</th>
                                <th>Check-Out</th>
                            </tr>
                            {
                                list.length > 0 &&
                                list.map((std) => {
                                    return (
                                        <tr key={std.rollno} style={
                                            std.attendance === 'absent' ?
                                                { background: '#fee4e4' } :
                                                { background: 'white' }
                                        }>
                                            <td>{std.rollno}</td>
                                            <td>{std.name}</td>
                                            <td>{std.attendance === '' ? 'no attendance yet' : std.attendance}</td>
                                            <td>{std.attendance === 'present' ? std.checkIn.toFixed(2) + ' AM' : ''}</td>
                                            <td>{std.attendance === 'present' ? 'not left yet' : ''}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Search