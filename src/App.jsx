import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  // fetch students from backend
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/students");
      setStudents(res.data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  useEffect(() => {
    fetchStudents(); // ✅ correct function name
  }, []);

  return (
    <>
      <h1>hello react</h1>
      <ul>
        {Array.isArray(students) &&
          students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.age}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
