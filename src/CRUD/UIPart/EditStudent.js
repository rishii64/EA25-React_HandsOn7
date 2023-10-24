import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editStudent } from "../Slice/Slice";
import { useDispatch, useSelector } from "react-redux";

function EditStudent(){
    const Index = useParams().id
    const data = useSelector((state)=> state.Student)
    const nav = useNavigate()
    const dispatch = useDispatch()

    const [info, setInfo] = useState({
        name : data[Index].name,
        age : data[Index].age,
        course : data[Index].course,
        batch : data[Index].batch
    })
    const handleChange = (e)=>{
        setInfo({...info, [e.target.name] : e.target.value})
    }
    const handleUpdate = ()=> {
        dispatch(editStudent({info, Index}))
        nav('/student')
    }
    return(
        <div className="edit">
            <h1>This is Edit Component</h1>
            <form className="editForm">
                <inputdetails>
                    <label>Name: </label>
                    <input type='text' name='name' placeholder={data[Index].name} onChange={handleChange} />
                </inputdetails>

                <inputdetails>
                    <label>Age: </label>
                    <input type='number' name='age' placeholder={data[Index].age} onChange={handleChange} />
                </inputdetails>

                <inputdetails>
                    <label>Course: </label>
                    <input type='text' name='course' placeholder={data[Index].course} onChange={handleChange} />
                </inputdetails>

                <inputdetails>
                    <label>Batch: </label>
                    <input type='text' name='batch' placeholder={data[Index].batch} onChange={handleChange} />
                </inputdetails>
            </form>
            <div className="btns">
                <button className="updateBtn" onClick={handleUpdate}>Update</button>
                <button className="backBtn" onClick={()=> nav(-1)}>Go Back</button>
            </div>
        </div>
    )
}
export default EditStudent

