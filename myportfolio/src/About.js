import React from 'react';

export default function About() {
        return(
            <div id="About">
                <div className = "mainTitle">
                    ABOUT ME
                </div>
                <div className = "componentSection">
                    <span id = "bigger">Hello, I'm Maitra Patel!</span> <br></br>
                     I am an aspiring software engineer based in <span id = "highlighted">Detroit, MI</span>.
                     Developing meaningful software intrigues me. 
                     I am capable of developing both front-end and back-end applications. <br></br><br></br>
                     Currently I am pursuing a <span id = "highlighted">bachleor's in Software Engineering</span> at University of Michigan, Dearborn. <br></br><br></br>
                     <span id = "highlighted">Expected Graduation: December, 2020.</span><br></br><br></br>
                     <div style={{textAlign: "left"}}>I love keeping up with tech. Here are a few <span id = "highlighted">technologies</span> I've been working with recently:</div>
                     <div className = "skills">
                          <div className = "skillSection1">
                             <ul style = {{listStyleType: "disc"}}>
                               <li id = "highlighted">HTML/CSS</li>
                               <li id = "highlighted">Vanilla Javascript</li>
                               <li id = "highlighted">React.js</li>
                               <li id = "highlighted">PHP</li>
                               <li id = "highlighted"><u>Environments</u>: Windows, Linux</li>
                             </ul>
                          </div>
                          <div className = "skillSection2">
                            <ul style = {{listStyleType: "disc"}}>
                            <li id = "highlighted">Python</li>
                            <li id = "highlighted">Java </li>
                            <li id = "highlighted"><u>Databases</u>: MySQL, Oracle, SQLServer, and Firebase. </li>
                            <li id = "highlighted">Android Studio</li>
                            </ul>
                          </div>
                     </div> <br></br>
                     <div style={{textAlign: "left"}}>I have also gained <span id = "highlighted">adequate experience</span> in the following:</div>
                     <div className = "skills">
                          <div className = "skillSection1">
                             <ul style = {{listStyleType: "disc"}}>
                               <li id = "highlighted">C++</li>
                               <li id = "highlighted">C#</li>
                               <li id = "highlighted">C</li>
                               <li id = "highlighted">Assembly language</li>
                             </ul>
                          </div>
                          <div className = "skillSection2">
                            <ul style = {{listStyleType: "disc"}}>
                              <li id = "highlighted"><u>Environments</u>: MacOS</li>
                            </ul>
                          </div>
                    </div>
                    <div style={{textAlign: "left"}}>I am an active job seeker. If you know someone who is hiring, please reach out to me <a href = "#contact" style={{color:"blue", textUnderlineOffset:"true"}}>here. </a></div>
                </div>
            </div>
        );     
}