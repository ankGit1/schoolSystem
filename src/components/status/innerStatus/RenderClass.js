import React, { useEffect, useState } from 'react'
import './innerStatus.css'
import Students from '../../data/Students'

function RenderClass({classKey,grade}) {
    const [preNum,setPreNum] = useState(0); 

    useEffect(()=>{
         const fetchData = ()=>{
            const filterData = Students.filter((std) => {
                return (
                    std.class.toLowerCase().includes(classKey) &&
                    std.attendance.toLowerCase().includes('present')
                )
            })
            setPreNum(filterData.length)
         }
         fetchData()
    },[classKey])
  return (
    <>
    <div className='renderClass_div'>
        <table>
            <tbody>
                <tr>
                    <th>Class</th>
                    <th>Total</th>
                    <th>Present</th>
                    <th>Absent</th>
                </tr>
                <tr>
                    <td>{grade}</td>
                    <td>10</td>
                    <td>{preNum}</td>
                    <td>{10-preNum}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default RenderClass