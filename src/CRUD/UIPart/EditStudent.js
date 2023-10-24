import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editStudent } from "../Slice/Slice";
import { useDispatch, useSelector } from "react-redux";

function EditStudent(){
    const Index = useParams().id
    const data = useSelector((state)=> state.Student)
    const nav = useNavigate()
    const dispatch = useDispatch()
    // console.log(data[Index]);

    const [info, setInfo] = useState({
        name : data[Index].name,
        age : data[Index].age,
        course : data[Index].course,
        batch : data[Index].batch
    })
    const handleChange = (e)=>{
        setInfo({info, [e.target.name] : e.target.value})
    }
    console.log(setInfo);
    const handleUpdate = ()=> {
        dispatch(editStudent({info, Index}))
        nav('/student')
    }
    return(
        <>
            <h1>This is Edit Component</h1>
            <input type='text' name='name' placeholder={data[Index].name} onChange={handleChange} />
            <input type='number' name='age' placeholder={data[Index].age} onChange={handleChange} />
            <input type='text' name='course' placeholder={data[Index].course} onChange={handleChange} />
            <input type='text' name='batch' placeholder={data[Index].batch} onChange={handleChange} />
            <button onClick={handleUpdate}>Update</button>
            <button onClick={()=> nav(-1)}>Go Back</button>
        </>
    )
}
export default EditStudent

