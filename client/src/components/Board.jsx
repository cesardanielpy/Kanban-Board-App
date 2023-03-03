import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProjectsPanel from './ProjectsPanel'
import { Link } from 'react-router-dom';

const Board = () => {
    const [backlog, setBacklog] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [completed, setCompleted] = useState([]);


    const startProject = async (project) => {
        await axios.put(`http://localhost:8000/api/projects/${project._id}`, {status: 'inprogress'})
        .then((response)=> {
            const updatedProject = response.data;
            setBacklog(backlog.filter((project)=> {
                return project._id !== updatedProject._id;
            }));
            setInProgress([...inProgress, updatedProject]);
        }).catch(e => console.log(e));
    }

    const completeProject = async (project) => {
        await axios.put(`http://localhost:8000/api/projects/${project._id}`, {status: 'completed'})
        .then((response)=> {
            const updatedProject = response.data;
            setInProgress(inProgress.filter((project)=> {
                return project._id !== updatedProject._id;
            }));
            setCompleted([...completed, updatedProject]);
        }).catch(e => console.log(e));
    }


    const deleteProject = async (deleteProject) => {
        await axios.delete(`http://localhost:8000/api/projects/${deleteProject._id}`).then((response) => {
            setCompleted(completed.filter((project)=> {
                return project._id !== deleteProject._id;
            }));
        })
    }
    
    useEffect(() => {

        const getProjects = async () => {
            await axios.get(`http://localhost:8000/api/projects`)
            .then((response) => {
                const data = response.data;
                setBacklog(data.todo);
                setInProgress(data.inProgress);
                setCompleted(data.completed);
            })
            
        }

        getProjects();
    }, [])
  return (
    <>
    <div className='row'>
        <ProjectsPanel projects={backlog} title={'Backlog'} panelType={'backlog'} projectAction={startProject}/>
        <ProjectsPanel projects={inProgress} title={'In Progress'} panelType={'inProgress'} projectAction={completeProject}/>
        <ProjectsPanel projects={completed} title={'Completed'} panelType={'completed'} projectAction={deleteProject}/>
    </div>
    <div className='row mt-2'>
        <div className='col-lg-12'>
        <Link to={'projects/new'} className='text-white col-lg-2 btn btn-info'>Add New Project</Link>
        </div>
        
    </div>
    </>
  )
}

export default Board