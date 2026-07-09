import React,{useEffect,useState} from 'react';
import { getStudents,addStudent } from './studentService';

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

   //Add student
   const handleAdd= async (e)=>{
    e.preventDefault();
    await addStudent(form);
    setForm({name:"", age:""});
    fetchStudents();
   };



  return(
    <div style={{textAlign:"center", padding:"20px"}}>
      <h1>Student CRUD</h1>
      <h2>Students List</h2>

      {/* Form to add a new student */}
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
        />
        <input
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({...form, age: e.target.value})}
        />
        <button type="submit">Add Student</button>
      </form>

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