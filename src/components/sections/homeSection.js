function HomeSection(){
    let url = "";
    return (
        <div className="section1">
            <div className="text">
                <div className="intro-text">
                    <p>turning ideas into</p>
                    <p>real life <a href={url} className="text-animation">products</a></p>
                    <p>is my calling.</p>
                </div>
                <div className="caption">
                    <a href={url}>ABOUT ME</a></div>
            </div>
        </div>
    )
}

export default HomeSection;