import axios from 'axios';

const API_URL = 'http://localhost:8080/students';

//get all students
export const getStudents=()=>axios.get(API_URL);

