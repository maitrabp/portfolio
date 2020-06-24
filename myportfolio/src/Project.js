import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

function Buttons(props) {
    if(props.demo)
    {
        return <div style={{position: "absolute", marginBottom: "2rem", width: "100%",  bottom: 0}}><a target="_blank" rel="noopener noreferrer" href={props.demolink} className="projbutton">Demo</a><a target="_blank" href={props.codelink} className="projbutton">Code</a></div>;
    }
    return <div style={{position: "absolute", marginBottom: "2rem", width: "100%",  bottom: 0}}><a target="_blank" rel="noopener noreferrer" href={props.codelink} className="projbutton">Code</a></div>;
}
function Project(props) {
    return(
        <div className = "card text-center shadow">
            <div className = "overflow">
                <img className = "card-img-top" src={`../projImages/${props.projImg}`} alt = {props.projName + ' img'}/>
            </div>
            <div className = "card-body text-dark">
                <h4 className = "card-title">{props.projName}</h4>
                <p className = "card-text text-secondary" style={{padding: "0px 1rem"}}>
                   {props.projDesc}
                </p>
            </div>
            <Buttons demo = {props.demo} demolink={props.demolink} codelink={props.codelink}/>
        </div>
    );
}
export default Project;