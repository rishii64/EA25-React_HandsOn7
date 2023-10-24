import React from 'react'
import { addStudent } from '../Slice/Slice'
import { useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'

export default function AddStudent() {
    const dispatch = useDispatch()
    let nav = useNavigate()
    const tempObj = {
        name : '',
        age : '',
        course : '',
        batch : ''
    }
    const handleChange = (e)=> {
        tempObj[e.target.name] = e.target.value
    }
    const handleSubmit = ()=>{
        dispatch(addStudent(tempObj))
        nav('/student')
    }
  return (
    <div>
        <h2>New Student Page</h2>
        <input type='text' name='name' placeholder='Enter name' onChange={handleChange} />
        <input type='number' name='age' placeholder='Enter age' onChange={handleChange} />
        <input type='text' name='course' placeholder='Enter course' onChange={handleChange} />
        <input type='text' name='batch' placeholder='Enter batch' onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={()=> nav(-1)}>Go Back</button>
    </div>
  )
}
