import React from 'react'
import { useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'

export default function Student() {
  let nav = useNavigate()
  const stuData = useSelector((state)=> state.Student)
  return (
    <>
      <h1>Student Page</h1>
      <table className='table' id='table' border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stuData.map((item, index)=>{
            return(
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>
                <td><Link to={`/editStudent/${index}`}>Edit</Link></td>
              </tr>
            )
          })}
        </tbody>
        </table>
        <button className='newBtn' onClick={()=> nav('/addStudent')}>Add New Student</button>
    </>
  )
}
