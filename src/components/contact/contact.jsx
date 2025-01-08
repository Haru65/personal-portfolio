import React from "react";
import "./contact.css";
import { motion } from "framer-motion";
function Contactpage(){
    return(<>
       

        <h3 className="contacttitle">Contact</h3>
        <motion.div className="main" initial={{opacity:0}}
            whileInView={{
                opacity:1,
                scale:1,
                transition:{
                    duration:2
                }
            }} >
            <div className="socials">
                <a href="https://www.linkedin.com/in/aditya-khandagale-745a8a232/" target="_blank"> 
                     <img className="emotes"src="./src/assets/socials/linkedin.png"  alt="linkedin" />
                    </a> 
                <a href="https://github.com/Haru65" target="_blank">

                <img className="emotes"src="./src/assets/socials/git.png" alt="github" />
                </a>
                
                <a href="mailto:adityakhandagale69@gmail.com">
                    <img className="emotes"src="./src/assets/socials/mail.png" alt="mail" />
                    </a>
                   
                      
                                    </div>
                
                    
            <motion.div className="loc">
                <p>I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!</p>
            </motion.div>
          
        </motion.div>
       
    
           
    </>
    )
}

export default Contactpage