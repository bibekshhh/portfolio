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
                            <small>Traverse is an award-winning, full-service production company specializing.</small>
                            <div className="input-wrapper">
                                <input type="text" placeholder="Email" />
                                <button type="submit"><i className="bi bi-send"></i></button>
                            </div>
                        </div>
                        <div><span>Policy</span>
                            <ul>
                                <li>Return Policy</li>
                                <li>Terms Of use</li>
                                <li>Security</li>
                                <li>Privacy</li>
                                <li>Sitemap</li>
                                <li>Faq</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span> Traverse is a blog for travel planner, tour guide book, &amp; learning platform. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nam ea commodi expedita? Architecto iure natus, nesciunt
                        dolorem alias sint dolor in cumque ducimus quisquam numquam similique incidunt ipsam repudiandae?
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