import React from 'react'
import Moment from 'moment';

const Project = ({ project, handleClick }) => {

    const formattedDate = Moment(project.dueDate).format('DD/MM/YYYY');
    const buttonStyle = project.status === 'todo' ? 'btn-warning' : (project.status === 'inprogress' ? 'btn-success' : 'btn-danger');
    const buttonText = project.status === 'todo' ? 'Start Project' : (project.status === 'inprogress' ? 'Move to Completed' : 'Remove Project');
    return (
        <div className='card text-bg-light mb-1' >
            <div className='card-body'>
                <h3 className="card-title">{project.description}</h3>
                <h5>Due: {formattedDate}</h5>
                <button type='button' className={`col-lg-12 btn ${buttonStyle}`} onClick={() => handleClick(project)}>{buttonText}</button>
            </div>
        </div>
    )
}

export default Project