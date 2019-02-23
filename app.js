function Footer() {
    return(
        <div className="ui inverted vertical mastfoot center aligned segment">
            Powered for WeWantEd | Copyright &copy; 2019 | All rights reserved.
        </div>
    );
}

function CardExtraContent() {
    return(
        <div className="extra content">
            <a>
                <i className="university icon"></i>
                C.E. Student at Karabuk University
            </a>
        </div>
    );
}

function CardContent() {
    return(
        <div className="ui content">
            <a className="ui header">Osman</a>
            <div className="ui meta">
                <span className="ui date">Developing since 2010</span>
            </div>
            <div className="ui description">
                Working as freelancer
            </div>
        </div>
    );
}

function CardImage() {
    return(
        <div className="ui image">
            <img src="https://avatars2.githubusercontent.com/u/27975582?s=460" />
        </div>
    );
}

function Card() {
    return(
        <div className="ui centered card">
            <CardImage />
            <CardContent />
            <CardExtraContent />
        </div>
    );
}

function RightColumn() {
    return( 
        <div className="column">
            <Card />
        </div>
    );
}

function LeftColumn() {
    return( 
        <div className="column">
            <div className="ui icon header">
                <i className="idea icon"></i>
                Love to think and solve..
            </div>
            <div className="field">
                I'm trying to improve my thinking and researching skills to solve problems by analytically.
            </div>
            <br />
            <div className="ui medium primary button">
                Contact via mail  
                <i className="right mail icon"></i>
            </div>
        </div>
    );
}

function Grid() {
    return(
        <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
                <LeftColumn />
                <RightColumn />  
            </div>
        </div>
    );
}

function About() {
    return(
        <div className="ui placeholder container segment">
            <Grid />
        </div>
    );
}

function SocialButton_4() {
    return(
        <button className="ui circular github massive icon button animated slow fadeInRightBig">
            <i className="github icon"></i>
        </button>
    );
}

function SocialButton_3() {
    return(
        <button className="ui circular linkedin massive icon button animated slow fadeInRight">
            <i className="linkedin icon"></i>
        </button>
    );
}

function SocialButton_2() {
    return(
        <button className="ui circular facebook massive icon button animated slow fadeInLeft">
            <i className="facebook icon"></i>
        </button>
    );
}

function SocialButton_1() {
    return(
        <button className="ui circular instagram massive icon button animated slow fadeInLeftBig">
            <i className="instagram icon"></i>
        </button>
    );
}

function SocialBox() {
    return(
        <div className="ui inverted segment social">
            <div className="ui divider container animated slow fadeInLeftBig"></div>
            <SocialButton_1 />
            <SocialButton_2 />
            <SocialButton_3 />
            <SocialButton_4 />
        </div>
    );
}

function HeaderText() {
    return(
        <div className="ui text container centered">
            <h1 className="ui inverted header animated slow flipInX" id="name">OSMAN ÇALIKOĞLU</h1>
            <p className="animated slow fadeInDown" id="job">FRONT-END SOFTWARE ENGINEER</p>
        </div>
    );
}

function HeaderScrollText() {
    return(
        <div className="ui inverted right aligned segment animated infinite fadeInDown fooot">
            SCOLL DOWN FOR LEARN ABOUT ME
        </div>
    );
}

function Header() {
    return(
        <div className="ui inverted vertical masthead center aligned segment">
            <HeaderText />
            <SocialBox />
            <HeaderScrollText />
        </div>
    );
}

function LoadPage() {
    return(
        <div>
            <Header />
            <About />
            <Footer />
        </div>
    );
}

ReactDOM.render(<LoadPage />, document.querySelector('#root'));