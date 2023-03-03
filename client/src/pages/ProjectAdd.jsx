import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ProjectForm from '../components/ProjectForm';
const ProjectAdd = ({ formAction }) => {
    const initialValues = {
        description: '',
        dueDate: '',
    }
    
    const navigate = useNavigate();
    
    const createProject = async (values) => {
        await axios.post(`http://localhost:8000/api/projects`,values)
        .then((response)=>{
            navigate('/')
        })
        .catch(e => console.log(e));
    }
    
    return (
        <>
        <div className='row justify-content-end mb-2'>
            <div className='col-10 col-lg-2 '>
            <Link to={'/'} className='btn btn-link'>Back to Dashboard</Link>
            </div>
        </div>
            <ProjectForm initialValues={initialValues} 
                formAction={createProject} />
            
        </>
    )
}

export default ProjectAdd