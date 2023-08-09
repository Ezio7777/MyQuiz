import React from 'react'
import "../components_style/home.css"

const Home = () => {
  return (
    <div className='container vh-100  '>
        <div className='row vh-100 body_color'>

            {/* card1 */}
            <div className='col-lg-6 col-md-6 col-sm-12 card-center container-fluid'>
                <div className="card card1">
                    <div className='card1_logo '>
                        <i className="fa-solid fa-right-to-bracket  fa-5x card1_icon"></i>
                    </div>
                    <div className="card1footer">
                        <button
                            type="button"
                            className="btn card1_btn btn-lg"
                        >
                            Join a Quizz
                        </button>
                    </div>
                </div>
            </div>

            {/* card2 */}
            <div className='col-lg-6 col-md-6 col-sm-12 card-center'>
                <div className="card card2">
                    <div className='card2_logo '>
                        <i className="fa-solid fa-ghost fa-5x card2_icon"></i>
                    </div>
                    <div className="card2footer">
                        <button
                            type="button"
                            className="btn card2_btn btn-lg"
                        >
                            Host a Quizz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home