import React from 'react'
import "../components_style/join_code.css"

const  join_code = () => {

  const currentYear = new Date().getFullYear()

  return (

    <div className='container vh-100 join_code_body' >
        <div className="login-box">

            <form>
                <div className="user-box">
                    <input type="text" name="" required=""/>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" required=""/>
                    <label>Join Code</label>
                </div><center>
                <a href="#">
                        Join
                    <span></span>
                </a></center>
            </form>
        </div>
    </div>
  )
}

export default join_code