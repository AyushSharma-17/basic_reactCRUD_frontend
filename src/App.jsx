import React,{useEffect,useState} from 'react';
import { getStudents } from './studentService';

function App(){

   const[students,setStudents]= useState([]);
   const [form ,setForm]= useState({name:" ",age:" "});
       
   //fetch students
   const fetchStudents= async()=>{
    try{
      const res= await getStudents();
      setStudents(res.data);
    }catch(err){
      console.error("Error fetching students:", err);
    }
   };

   useEffect(()=>{
    fetchStudents();
   },[])



  return(
    <div style={{textAlign:"center", padding:"20px"}}>
      <h1>Student CRUD</h1>
      <h2>Students List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            Name: {student.name}, Age: {student.age}
          </li>
        ))}
      </ul>

    </div>
  )
}
export default App;