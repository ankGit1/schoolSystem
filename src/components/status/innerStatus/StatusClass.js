import React from 'react'
import './innerStatus.css'
import RenderClass from './RenderClass'

function StatusClass() {
  return (
    <>
    <h1 className='statusClass_title'>Classwise Attendance</h1>
    <RenderClass classKey='8a' grade='8th C'/>
    <RenderClass classKey='9b' grade='9th B'/>
    <RenderClass classKey='9c' grade='9th C'/>
    <RenderClass classKey='8c' grade='8th C'/>
    <RenderClass classKey='10d' grade='10th D'/>
    </>
  )
}

export default StatusClass