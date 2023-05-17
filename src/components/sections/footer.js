function Footer() {
    let url = "";
    return(
        <>
        <footer className="footer-distributed">
            <hr />
            <div className="footer-inside">
                <div className="footer-center">
                    <div className="footer-center-wrapper">
                        <div className="newsletter"><span>Newsletter</span>
                            <small>Join my newsletter for more upcomming blogs and project details.</small>
                            <div className="input-wrapper">
                                <input type="text" placeholder="Email" />
                                <button type="submit"><i className="bi bi-send"></i></button>
                            </div>
                        </div>
                        <div><span>Links</span>
                            <ul>
                                <li><a href="https://www.upwork.com/freelancers/~01f7c77d403c179c96">Upwork</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#languages">Skills</a></li>
                                <li><a href="#repositories">Projects</a></li>
                                <li><a href="https://meroshare-pro.onrender.com/">Mero Share Pro</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About me</span> Experienced web developer skilled in frontend (React.js) and backend technologies, delivering exceptional digital experiences through captivating interfaces and robust functionality.
                    </p>
                    <div className="footer-icons">
                        <a href={url} data-toggle="tooltip" title="Facebook"><i className="bi bi-facebook"></i></a>
                        <a href={url} data-toggle="tooltip" title="Twitter"><i className="bi bi-twitter"></i></a>
                        <a href={url} data-toggle="tooltip" title="Linkedin"><i className="bi bi-linkedin"></i></a>
                        <a href={url} data-toggle="tooltip" title="Github"><i className="bi bi-github"></i></a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div>
                    <p className="footer-company-name">bibekshh &copy; 2022</p>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;