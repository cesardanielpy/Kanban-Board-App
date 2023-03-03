import React from 'react'
import Project from './Project'


const ProjectsPanel = ({projects, title, panelType, projectAction }) => {
    let panelStyle = panelType === 'backlog' ? 'text-bg-info' : (panelType === 'inProgress' ? 'text-bg-warning' : 'text-bg-success');
    return (
        <>
            <div className='col-lg-4'>
                <div className='card'>
                    <div className={`card-header text-center ${panelStyle}`}><h2>{title}</h2></div>
                    <div className='card-body overflow-auto' style={{ minHeight: "500px", maxHeight: "500px" }}>
                    {projects.map ((project,index) => <Project key={project._id} project={project} handleClick={projectAction}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectsPanel