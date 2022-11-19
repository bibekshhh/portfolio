function About() {
    let url = "";
    return (
        <div className="section3">
            <div className="about-me-wrapper">
                <div className="about-me-container">
                    <div className="fixed-header"></div>
                    <div className="circle-parent">
                        <div className="circle"></div>
                    </div>

                    <div className="list">
                        <div className="item item1">
                            <span>Joined GCE A Levels at <a href={url}>SXC</a> .</span>
                            <small>Currently studying <a href={url}>Computer Science</a> as a major.</small>
                        </div>

                        <div className="item item2">
                            <span><a href={url}>Member</a> of IT Club at SXC.</span>
                            <small>Creative <a href={url}>Frontend Developer</a></small>
                        </div>

                        <div className="item item3">
                            <span>Developed Multiple <a href={url}>Projects</a></span>
                            <small>Creative <a href={url}>Frontend Developer</a></small>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;