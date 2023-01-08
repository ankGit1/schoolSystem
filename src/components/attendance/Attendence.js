import React, { useEffect, useState, useContext } from 'react'
import './attendence.css'
import Students from '../data/Students';
import { globalContext } from '../../App';
import { useNavigate } from 'react-router-dom';

function Attendence() {
    const { setClassNew } = useContext(globalContext)
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    const selectOption = (e, key, i) => {
        const findOne = Students.findIndex(std => std.rollno === key.rollno)
        Students[findOne].attendance = e.target.value;
        students[i].attendance = e.target.value;
    }

    const submitValue = () => {
        for (let i = 0; i < students.length; i++) {
            if (students[i].attendance === '') {
                alert('please complete the attendance')
                return
            }
        }
        setClassNew(students);
        navigate('/status')
    }

    useEffect(() => {
        const fetchData = async () => {
            const stdClass = Students.filter((std) => {
                return (
                    std.class.toLocaleLowerCase().includes('10d')
                )
            })
            setStudents(stdClass)
        }
        fetchData()
    }, [])

    return (
        <>
            <div className='attendence_attendDiv'>
                <h1>Class 10th D</h1>
                <h2>student's list</h2>
                <div className='attendence_tableDiv'>
                    <table className='attendance_table'>
                        <tbody>
                            <tr>
                                <th>roll no.</th>
                                <th>name</th>
                                <th>attendence</th>
                            </tr>
                            {students.length > 0 &&
                                students.map((std, i) => {
                                    return (
                                        <tr key={std.rollno}>
                                            <td>{std.rollno}</td>
                                            <td>{std.name}</td>
                                            <td>
                                                <span>
                                                    <input type="radio" value="present" name={std.rollno}
                                                        onClick={(e) => selectOption(e, std, i)} /> P
                                                    <input type="radio" value="absent" name={std.rollno}
                                                        onClick={(e) => selectOption(e, std, i)} /> A
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })

                            }
                        </tbody>
                    </table>
                </div>
                <button onClick={() => submitValue()}>SUBMIT</button>
            </div>
        </>
    )
}

export default Attendence