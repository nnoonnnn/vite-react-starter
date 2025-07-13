import React from 'react'
import { Github,Instagram,Facebook} from 'lucide-react'
import "../style/FooterStyle.css"
function Footer() {
  return (

    <footer>

        <div className='footer-section'>
            <div className='first'>
                <h1>
                    Your Project Name
                </h1>
           

                <div className='menu-container'>
                    <p>Module-1</p>
                    <p>Module-2</p>
                    <p>Module-3</p>
                    <p>Module-4</p>
                </div>
             </div>

            <hr/>

            <div className='contact-us'>

                <Github size={34} />
                <Facebook size={34} />
                <Instagram size={34} />

            </div>

            <hr/>

            <div className='other-details'>

                <h2>your copyright details</h2>

                <p>Developer detail</p>

            </div>

        </div>

    </footer>
  )
}

export default Footer