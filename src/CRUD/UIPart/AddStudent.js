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
        <h1>New Student Page</h1>
        <form className="editForm">
            <div className='inputDetails'>
                <label>Name: </label>
                <input type='text' name='name' placeholder='Enter name' onChange={handleChange} />
            </div>
            <div className='inputDetails'>
                <label>Age: </label>
                <input type='number' name='age' placeholder='Enter age' onChange={handleChange} />
            </div>
            <div className='inputDetails'>
                <label>Course: </label>
                <input type='text' name='course' placeholder='Enter course' onChange={handleChange} />
            </div>
            <div className='inputDetails'>
                <label>Batch: </label>
                <input type='text' name='batch' placeholder='Enter batch' onChange={handleChange} />
            </div>
        </form>
        <div className="btns">
            <button className='submitBtn' onClick={handleSubmit}>Submit</button>
            <button className="backBtn" onClick={()=> nav(-1)}>Go Back</button>
        </div>
    </div>
  )
}
