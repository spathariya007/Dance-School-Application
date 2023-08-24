import React from 'react'
import './About.css'
import img from './images/mt-2259-bg1.png'

const About = () => {
  return (
    <div> 
      <div>
          <h4 className='a-h4'>DanceworX School of Dance</h4>
          <p className='a-p-tag'>The Danceworx comprises of The Danceworx Academy and The Danceworx Student Repertory Company. <br /><br />


             The Danceworx Academy was set up by Indian-Australian choreographer Ashley
             Lobo in November of 1998 to teach dance along the lines of dance institutes overseas.
             Currently its curriculum consists of styles such as Jazz, Classical Ballet, Contemporary, 
             Urban and Funk. <br /><br />

             Today, The Danceworx Academy has a huge student database spanning New Delhi, NCR and Mumbai. <br /><br />
              The Danceworx Student Repertory Company was set up with senior students hand-picked by the 
              Artistic Director Ashley Lobo. These budding artists are given opportunities to perform,
              teach and choreograph. They have a special curriculum set by the Artistic Director.</p>
          <img src={img} alt="" className='img1'/>
       </div>
    </div>
  )
}

export default About