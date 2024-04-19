import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function StudentInfo() {

   const param= useParams();
   
   const [data,setData]=useState([
    {id:"1",sname:"student1",marks:"50"},
    {id:"2",sname:"student2",marks:"500"},
    {id:"3",sname:"student3",marks:"30"},
    {id:"4",sname:"student4",marks:"60"},
   ])
  return (
    <div>
        <h1>student</h1>
        {param.name ? 
        JSON.stringify(data.find((student)=>student.sname===param.name))
        :JSON.stringify(data)

        }
      
    </div>
  )
}

export default StudentInfo
