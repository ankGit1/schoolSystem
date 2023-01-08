import React from 'react'
import './teacher.css'

function Teacher() {
  return (
    <>
      <div className='teacher_div'>
        <div className='teacher_img'>
          <img src='/images/boy11.png' alt='img' />
        </div>
        <div className='teacher_info'>
        <div className='teacher_line'></div>
          <table className='teacher_table'>
            <tbody>
              <tr>
                <td>Name</td>
                <td>: john vokis</td>
              </tr>
              <tr>
                <td>Education</td>
                <td>: M.SC (VYGPT, Mumbai)</td>
              </tr>
              <tr>
                <td>Expertise In</td>
                <td>: Mathematics, English</td>
              </tr>
              <tr>
                <td>Class-teacher Of</td>
                <td>: 10th D</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>: 1203456789</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>: teacher@mail.com</td>
              </tr>
              <tr>
                <td>Member Of</td>
                <td>: School Management Commitee </td>
              </tr>
              <tr>
                <td></td>
                <td>: Exam Cordination Commitee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <Today /> */}
    </>
  )
}

export default Teacher