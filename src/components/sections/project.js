import project from '../../assets/project2.png';


function Project() {
    let url = "";
    return (
        <>
        <div className="section-heading" style={{marginTop: '100px'}}><a href={url}>MY PROJECTS</a></div>
        <div className="section2">
            <div className="projects-section">
                <div className="projects-container">
                    <div className="project project1">
                        <div className="screen">
                            <img src={project} alt="" />
                        </div>
                    </div>
                    <div className="project project2">
                        <div className="screen">
                            <img src={project} alt="" />
                        </div>
                    </div>
                    <div className="project project3">
                        <div className="screen">
                            <img src={project} alt="" />
                        </div>
                    </div>
                    <div className="project project4">
                        <div className="screen">
                            <img src={project} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Project;