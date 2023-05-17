import art from '../../assets/art.png'
import nodejs from '../../assets/nodejs.svg'
import python from '../../assets/python.svg'
import react from '../../assets/react.svg'
import sql from '../../assets/sql.svg'
import html from '../../assets/html.svg'
import firebase from '../../assets/firebase.svg'
import javascript from '../../assets/javascript.svg'
import css from '../../assets/css.svg'
// import  from '../../assets'

function Languages() {
    let url = "";
    let api = "https://img.icons8.com/color/60/000000/api.png";
    return (
        <>
        <div className="section-heading">
            <a href={url}>Languages</a>
        </div>
        <div className="section5" id='languages'>
            <div className="languages-wrapper">
                <div className="languages-list">
                    <div className="centre-art language"><img src={art} alt="Vector Art" /></div>
                    <div className="language nodejs"> <img src={nodejs} alt="Node JS" /></div>
                    <div className="language python"><img src={python} alt="Python" /></div>
                    <div className="language reactjs"><img src={react} alt="React JS" /></div>
                    <div className="language sql"><img src={sql} alt="MySQL" /></div>
                    <div className="language html"><img src={html} alt="HTML" /></div>
                    <div className="language firebase"><img src={firebase} alt="firebase" /></div>
                    <div className="language js"><img src={javascript} alt="Javascript" /></div>
                    <div className="language css"><img src={css} alt="CSS" /></div>
                    <div className="language api"><img src={api} alt="" /></div>
                </div>

                <div className="languages-timeline">
                    <div className="language-header">Timeline</div>
                    <div className="timeline">

                        <div className="language">
                            <div className="logo">
                                <img src={firebase} alt="" />
                            </div>
                            <div className="information">
                                <div className="title">Hosting and Deployment</div>
                                <div className="description">Familiar with hosting service like AWS, Firebase, Heroku, and Render.</div>
                            </div>
                        </div>

                        <div className="language">
                            <div className="logo">
                                <img src={nodejs} alt="" />
                            </div>
                            <div className="information">
                                <div className="title">Backend Frameworks</div>
                                <div className="description">Learned Node & Express JS, MongoDB, JWT, APIs etc.</div>
                            </div>
                        </div>

                        <div className="language">
                            <div className="logo">
                                <img src={react} alt="" />
                            </div>
                            <div className="information">
                                <div className="title">Frontend Skills</div>
                                <div className="description">Expert in ReactJS & Redux.js including librarie like ArcoDesign, Material UI</div>
                            </div>
                        </div>

                        <div className="language">
                            <div className="logo">
                                <img src={python} alt="" />
                            </div>
                            <div className="information">
                                <div className="title">Automation</div>
                                <div className="description">Experienced in developing: Web Scrapers, Discord Bots, and more.</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Languages;