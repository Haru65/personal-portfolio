import React, { useState, useTransition } from "react";
import "./about.css";
import { motion } from "framer-motion";
const TAB_DATA = [
    {
        title: "About",
        id: "About",
        content: (
            <ul className="PL1">
                <li>Enthusiastic and detail-oriented Full-Stack
Developer with a strong foundation in front-
end and back-end development. Proficient in
building responsive web applications using
HTML, CSS, JavaScript, and frameworks like
React.js. Skilled in back-end technologies
such as Node.js, Express.js, and database
management with MongoDB/MySQL. Adept at
problem-solving, learning new technologies,
and collaborating with teams to deliver robust
and user-friendly solutions. Seeking an entry-
level position to contribute to innovative
projects while expanding technical skills.</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="pl2">
                <li className="pl22">SSOSP COLLEGE OF DIPLOMA ENGINEERING <p>Diploma in Computer engineering </p> <span>Passed</span></li>
                <li className="pl22">KONKAN GYANPEETH COLLEGE OF ENGINEERING, KARJAT <p>Graduation in Information engineering </p> <span>Persuing</span> </li>
            </ul>
        ),
    },
    {
        title: "Skill",
        id: "skill",
        content: (
            <ul className="content">
                <li  className="content" >HTML/CSS/JAVASCRIPT</li>
                       <li className="content" >REACT JS</li>
                       <li className="content" >NODE JS</li>
                       <li className="content" >EXPRESSJS</li>
                       <li className="content" >DOCKER</li>
                       <li className="content" >GIT/GITHUB</li>
                       <li className="content" >MONGODB</li>
            </ul>
        ),
    },
];

function About() {
    const [tab, settab] = useState("About");
    const [ispending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            settab(id);
        });
    };
    
    return (
        <>
                <h4 className="abouttitle">About</h4>
            <div className="mainabout" >
                {/* Black box */}
                <motion.div className="blubb" 
                initial={{opacity:0}}
                whileInView={{
                    opacity:1,
                    scale:1,
                    transition:{
                        duration:2
                    }
                }}>
                    <div className="blob">
                    </div>
                  <a className="btn" href="./src/assets/haru-resume.pdf " download="haru-resume.pdf" target="_blank">
                     RESUME
                    </a> 
                </motion.div>

                {/* Container for buttons and content */}
                <motion.div className="contain" initial={{opacity:0}}
            whileInView={{
                opacity:1,
                scale:1,
                transition:{
                    duration:3
                }
            }}>
                    {/* Normal Buttons */}
                    <div className="button-group">
                        <button
                            className={tab === "About" ? "active-button" : ""}
                            onClick={() => handleTabChange("About")}
                        >
                            About
                        </button>
                        <button
                            className={tab === "education" ? "active-button" : ""}
                            onClick={() => handleTabChange("education")}
                        >
                            Education
                        </button>
                        <button
                            className={tab === "skill" ? "active-button" : ""}
                            onClick={() => handleTabChange("skill")}
                        >
                            Skill
                        </button>
                    </div>

                    {/* Content Div */}
                    <div className="contentmt-8">
                        {TAB_DATA.find((ta) => ta.id === tab).content}
                    </div>
                </motion.div>

            </div>
        </>
    );
}

export default About;
