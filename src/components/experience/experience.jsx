import React from "react";
import "./experience.css"
import { motion } from "framer-motion";



function Project(){
    return(
        <>

             <div className="whole"
             >

              <h2 className="titleexp">Experience</h2>

        <motion.div className="experi"
        >
         
            <motion.div className="skilldiv"initial={{opacity:0}}
            whileInView={{
                opacity:1,
                scale:1,
                transition:{
                    duration:3
                }
            }}>
                <img className="skills" src="./src/assets/skills/html.png" alt="" />
                <img  className="skills" src="./src/assets/skills/css-3.png" alt="" />
                <img  className="skills" src="./src/assets/skills/js.png" alt="" />
                <img className="skills" src="./src/assets/skills/physics.png" alt="" />
                <img className="skills" src="./src/assets/skills/nodejs.png" alt="" />
                <img className="skills" src="./src/assets/skills/nodejs" alt="" />
                <img className="skills" src="./src/assets/skills/github-sign.png" alt="" />
                <img className="skills" src="./src/assets/skills/docker.png" alt="" />

            </motion.div>
            <ul className="exp">
                <li className="bakwass" initial={{opacity:0}}
            whileInView={{
                opacity:1,
                scale:1,
                transition:{
                    duration:3
                }
            }}> 
                    <motion.div className="bakwasdiv"
                    initial={{opacity:0}}
                    whileInView={{
                        opacity:1,
                        scale:1,
                        transition:{
                            duration:3
                        }
                    }}>
                    <img src="./src/assets/parigh.jpg" alt="parigh" />
                    <div className="h4">
                    <h4 className="h4exp"> Parigh Technologies</h4>
                    <p className="h4exp">2022-2022 Intern</p>
                    <p className="h4exp">worked on digital marketing strategies</p>
                        </div>
                        
                        
                    </motion.div> 
                </li>
                
               
            </ul>
        </motion.div>
             </div>
        </>
    )
}


export default Project