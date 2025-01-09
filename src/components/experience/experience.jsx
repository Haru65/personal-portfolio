import React from "react";
import "./experience.css";
import { motion } from "framer-motion";

// Import images properly
import htmlImg from "../../assets/skills/html.png";
import cssImg from "../../assets/skills/css-3.png";
import jsImg from "../../assets/skills/js.png";
import physicsImg from "../../assets/skills/physics.png";
import nodeImg from "../../assets/skills/nodejs.png";
import githubImg from "../../assets/skills/github-sign.png";
import dockerImg from "../../assets/skills/docker.png";
import parighImg from "../../assets/parigh.jpg";



function Project() {
    return (
        <>
            <div className="whole">
                <h2 className="titleexp">Experience</h2>

                <motion.div
                    className="experi"
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 3 },
                    }}
                >
                    {/* Skills Section */}
                    <motion.div
                        className="skilldiv"
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 3 },
                        }}
                    >
                        <img className="skills" src={htmlImg} alt="HTML" />
                        <img className="skills" src={cssImg} alt="CSS" />
                        <img className="skills" src={jsImg} alt="JavaScript" />
                        <img className="skills" src={physicsImg} alt="Physics" />
                        <img className="skills" src={nodeImg} alt="Node.js" />
                        <img className="skills" src={githubImg} alt="GitHub" />
                        <img className="skills" src={dockerImg} alt="Docker" />
                    </motion.div>

                    {/* Experience Section */}
                    <ul className="exp">
                        <motion.li
                            className="bakwass"
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 3 },
                            }}
                        >
                            <motion.div
                                className="bakwasdiv"
                                initial={{ opacity: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 3 },
                                }}
                            >
                                <img src={parighImg} alt="Parigh Technologies" />
                                <div className="h4">
                                    <h4 className="h4exp">Parigh Technologies</h4>
                                    <p className="h4exp">2022-2022 Intern</p>
                                    <p className="h4exp">
                                        Worked on digital marketing strategies
                                    </p>
                                </div>
                            </motion.div>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </>
    );
}

export default Project;
