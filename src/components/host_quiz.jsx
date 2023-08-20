import React from 'react'
import "../components_style/host_quiz.css"

const  host_quiz = () => {

  const currentYear = new Date().getFullYear()

  return (

    <div className='container host_quiz_body' >
        <div className="login-box">

            <form>
                <div className="user-box">
                    <input type="text" name="" required=""/>
                    <label className='Quizz_Name_font'>Quizz Name</label>
                </div>
                <div>
                    <select className="form-select" id="validationDefault04" required>
                        <option selected disabled value="">No. of quiz</option>
                        <option>
                            <p>5 Questions</p>
                        </option>
                        <option>
                            <p>10 Questions</p>
                        </option>
                        <option>
                            <p>15 Questions</p>
                        </option>
                        <option>
                            <p>20 Questions</p>
                        </option>
                    </select>
                </div>    
                <div>
                    <select className="form-select" id="validationDefault04" required>
                        <option selected disabled value="">Time Duration</option>
                        <option>
                            <p>5 min</p>
                        </option>
                        <option>
                            <p>10 min</p>
                        </option>
                        <option>
                            <p>15 min</p>
                        </option>
                        <option>
                            <p>20 min</p>
                        </option>
                    </select>
                </div>    
                <center>
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