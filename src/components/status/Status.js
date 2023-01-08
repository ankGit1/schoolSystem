import React, { useEffect, useRef, useState } from 'react'
import './status.css'
import StatusClass from './innerStatus/StatusClass';
import Students from '../data/Students';

function Status() {
    let preValue = 0;
    let absValue = 0;
    let percent;
    const total = 50;
    const colorref = useRef();
    const colorref2 = useRef()
    const [present, setPresent] = useState(0)
    const [absent, setAbsent] = useState(0)
    const [num, setNum] = useState(0);

    useEffect(() => {
        const getData = () => {
            const count = Students.filter(std => { return (std.attendance.includes('present')) })
            setNum(count.length);
            percent = count.length;
        }
        getData();
        const absentData = async () => {
            let absentNum = total - percent;
            if (absentNum === 0) { setAbsent(0); return };
            colorref2.current = setInterval(() => {
                absValue++
                setAbsent(absValue)
                if (absValue === absentNum) clearInterval(colorref2.current)
            }, 30)
        }
        absentData()
        return (() => {
            clearInterval(colorref2.current)
        })
    }, [])

    useEffect(() => {
        const func = () => {
            colorref.current = setInterval(() => {
                preValue++
                setPresent(preValue)
                if (preValue === percent) clearInterval(colorref.current)
            }, 30)
        }
        func();
        return (() => {
            clearInterval(colorref.current)
        })
    }, [])

    return (
        <>
            <div className='status_schoolName'><h1>Attendance Graphix</h1></div>
            <div className='status_divtop'>
                <div style={{ background: `conic-gradient(#35ff81 ${(present / 60) * 100 * 3.6}deg,#ededed 0deg` }}
                    className='status_cir1'>
                    <div className='status_middleText'>
                        <h3><span>{Math.floor((present / 60) * 100)}</span>%</h3>
                        <p>Present</p>
                    </div>
                </div>
                <div style={{ background: `conic-gradient(#ff4949 ${(absent / 60) * 100 * 3.6}deg,#ededed 0deg` }}
                    className='status_cir1'>
                    <div className='status_middleText'>
                        <h3><span>{Math.floor((absent / 60) * 100)}</span>%</h3>
                        <p>Absent</p>
                    </div>
                </div>
            </div>
            <div className='status_statistics'>
                <div className='status_stat_num'>
                    <h1 style={{color: '#005F99'}}>50</h1>
                    <h3 style={{color: '#897979'}}>TOTAL</h3>
                </div>
                <div className='status_stat_num'>
                    <h1 style={{color: '#35ff81'}}>{present}</h1>
                    <h3 style={{color: '#897979'}}>PRESENT</h3>
                </div>
                <div className='status_stat_num'>
                    <h1 style={{color: '#FF4848'}}>{absent}</h1>
                    <h3 style={{color: '#897979'}}>ABSENT</h3>
                </div>
            </div>
            <StatusClass />
        </>
    )
}

export default Status