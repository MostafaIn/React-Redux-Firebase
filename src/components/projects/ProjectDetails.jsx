import React from 'react'

const ProjectDetails = (props) => {
    console.log(props)
    const id= props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title -{id}</span>
                    <p>Contemporary business and science treat as a project (or program) any undertaking, carried out individually or collaboratively and possibly involving research or design, that is carefully planned (usually by a project team[citation needed]) to achieve a particular aim.</p>
                </div>
                <div className="card-action gray lighten-4 gray-text">
                    <div>Posted by the net NINJA</div>
                    <div>2nd September , 4am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
