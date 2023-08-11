import React from 'react'
import "../components_style/host_quiz.css"

const  host_quiz = () => {

  const currentYear = new Date().getFullYear()

  return (

    <div className='container vh-100 join_code_body' >
        <div className="login-box">

            <form>
                <div className="user-box">
                    <input type="text" name="" required=""/>
                    <label>Quizz Name</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" required=""/>
                    <label>No of Questions</label>
                </div><center>
                <a href="#">
                        Create
                    <span></span>
                </a></center>
            </form>
        </div>
    </div>
  )
}

export default host_quiz