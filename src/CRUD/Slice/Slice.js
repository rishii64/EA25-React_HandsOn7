import {createSlice} from '@reduxjs/toolkit'

let StuData = [
    {name: "Mahi", age: 21, course: 'Frontend', batch: "March"},
    {name: "Anuj", age: 23, course: 'AI/ML', batch: "August"},
    {name: "Saptarsi", age: 22, course: 'MERN', batch: "June"}
  ]
const StuSlice = createSlice({
    name : 'Student_Data',
    initialState : StuData,
    reducers : {
        editStudent : (state, action)=>{
            state[action.payload.Index] = action.payload.info
        },
        addStudent : (state, action)=>{
            state.push(action.payload)
        }
    }
})
export const {editStudent, addStudent} = StuSlice.actions
export default StuSlice.reducer