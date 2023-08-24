 import React, { useEffect, useState } from 'react'
 import './Home.css'
 import video from './Video/tdx-23rd-birthday (1).mp4'
 import img from '../Component/images/s2 bgd.jpg'
 import img5 from '../Component/images//damce home 3.png'
 import img3 from'../Component/images/dance home 1.png'
 import img4 from'../Component/images/dance home 2.png'
 
 const Home = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset;
  //     setIsScrolled(scrollTop > 0);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
   return (
    <div>
         <div className='vid1'>
                <video src={video} style={{width:"99.4%"}} autoPlay loop muted></video>
         </div>
         {/* <p className='P'>THE_DANCEWORX</p> */}
         {/* ==========================================Slide 2============================================= */}
         <div className='m-div2'>
          <img src={img} alt="" width={"99.4%"} height={'700px'}/>
          </div>
          <div className='mdiv3'>
            <img src={img4} alt=""  className='image2' />
            <div className='div-k'>
            <div className='s-div2'>
            Online Dance Classes for
            </div>
            <div className='s-div3'>
            Kids and Adults
            </div>
            <div className='s-div4'>
            HIGHLIGHTS OF THE MONTH
            </div>
            </div>
            {/* ==================================Slide3============================================== */}
            <img src={img3} alt="" className='image3'/>
            <div className='s3-div'>
              <h1 className='s3-h1'># The DANCEWORX</h1>
              <div className='s3-div2'>The Danceworx is a dance school established in 1999.
                 We aim to provide all students with the understanding
                 and an insight into both technique and
                choreography to prepare them for the professional sector.</div>
            </div>
            {/* =================================Slide4=========================================== */}
            <img src={img5} alt="" className='image4'/>
            <h2 className='s4-h2'>JANE L.</h2>
            <h4 className='s4-h4'>Founder, Lead Instructor</h4>
            <p className='s4-p'>Jane Lee founded Aeromint in 1999 to create a cozy dancing environment.
               She has studied Ballet, Modern, Contemporary, and Lyrical extensively 
               throughout Long Island and NYC and has training in Hip-Hop & Jazz.</p>
               {/* ===============================Slide5========================================= */}
               <div className='s5-div'>
                <img src="https://livedemo00.template-help.com/wt_prod-26770/images/gallery-06-original.jpg" alt="" className='d1-s5-img1' />
                <img src="https://livedemo00.template-help.com/wt_prod-26770/images/gallery-10-original.jpg" alt=""className='d1-s5-img2'/>
                <img src="https://livedemo00.template-help.com/wt_prod-26770/images/gallery-02-original.jpg" alt="" className='d1-s5-img3'/>
                <img src="https://livedemo00.template-help.com/wt_prod-26770/images/gallery-03-original.jpg" alt="" className='d1-s5-img4'/>
               </div>
               <div className='s5-div2'>
                <img src="https://livedemo00.template-help.com/wt_prod-26770/images/gallery-14-original.jpg" alt="" className='d2-s5-img1'/>
                <img src="https://livedemo00.template-help.com/wt_prod-26770/images/gallery-16-original.jpg" alt="" className='d2-s5-img2'/>
                <img src="https://livedemo00.template-help.com/wt_prod-26770/images/home-07-536x626.jpg" alt="" className='d2-s5-img3'/>
                <img src="https://livedemo00.template-help.com/wt_prod-26770/images/gallery-13-480x340.jpg" alt="" className='d2-s5-img4'/>
               </div>
               
          </div>
          
 
    </div>
   )
 }
 
 export default Home

 