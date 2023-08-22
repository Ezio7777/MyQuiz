import React from 'react'
import "../components_style/about.css"


const about = () => {
  return (
    <div className='container  about_body'>
      <div class="h1">About Us</div>
      <div class="h3">Developed on the MERN stack, this responsive quiz app offers a comprehensive
       assessment experience. Assessors effortlessly create tests , customizing parameters like 
       duration, expiry, and question count (up to 20). With secure authentication, assessors 
       access test results and self-take functionalities. Examinees provide info, ensuring 
       singular test attempts before expiry; auto-submission occurs on time lapse. Data privacy 
       is ensured: dynamic question rotation thwarts cheating. A robust, user-friendly tool for 
       efficient evaluation and engaging examination.</div>
       <br/>
       <div class="h2">Team Members</div>
     {/* card1 */}
     <div className='row about-img'>
     <div className='col-lg-4 col-md-6 col-sm-12 vedi-img'>
                <div className="card5">
                 <p class="text1">Name : Vedi Gupta <br/> Enroll No. : 211B343</p>
                </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12 vedi-img'>
                <div className="card5">
                <p class="text1">Name : Sunit Pal <br/> Enroll No. : 211B384</p>
                </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12 vedi-img'>
                <div className="card5">
                <p class="text1">Name : Soumya Gupta <br/> Enroll No. : 211B317</p>
                </div>
            </div>
            </div>
    </div>
  )
}

export default about

