function About() {
    let url = "";
    return (
        <div className="section3" id="about">
            <div className="about-me-wrapper">
                <div className="about-me-container">
                    <div className="fixed-header"></div>
                    <div className="circle-parent">
                        <div className="circle"></div>
                    </div>

                    <div className="list">
                        <div className="item item1">
                            <span>Works at <a href={"https://np.linkedin.com/company/rentideofficial"}>Rentide</a>.</span>
                            <small>Currently based on handling <a href={url}>Frontend</a> technologies.</small>
                        </div>

                        <div className="item item2">
                            <span>Created <a href={"https://meroshare-pro.onrender.com/"}>MeroShare Pro</a>.</span>
                            <small>A bulk-IPO applying and <a href={url}>investment</a> managing solution</small>
                        </div>

                        <div className="item item3">
                            <span>Developed multiple <a href={url}>Projects</a>.</span>
                            <small>Implemented both <a href={url}>Frontend and Backend</a> skills.</small>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;