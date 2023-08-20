import React from 'react'
import "../components_style/q_add.css"

function q_add() {
  return (
    <div className='container q_add_body'>

        {/* QUESTION   */}
        <div className='question'>
          QUESTION
        </div>

        {/* Answer */}
        <div className='ans'>
          <div className='ans_input'>
            <input type="text" />
          </div>
          <div className='check_mark'>
            
          </div>
        </div>
    </div>
  )
}

export default q_add