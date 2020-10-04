import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return (
      <div className="card z-depth-1 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title dashboard-title blue-text">{project.title}</span>
          <p className="grey-text">Posted by <span className="project-name">{project.authorFirstName} {project.authorLastName}</span></p>
          <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
      </div>
    );
}

export default ProjectSummary