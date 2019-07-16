import React from 'react'
import moment from 'moment'
const ProjectSummary = ({project}) => {
  return (
      <div className="card z-depth-0 project-summary">
          <div className="card-content gray-text text-darken-3">
              <div className="card-title">{project.title}</div>
              <p>posted by {project.authorFirstName} {project.authorLastName}</p>
              <p className="gray-text">{moment(project.createAt.toDate()).calendar()}</p>
          </div>
      </div>
  )
}

export default ProjectSummary
