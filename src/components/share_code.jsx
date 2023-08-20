import React from 'react'
import "../components_style/share_code.css"

function share_code() {
  return (
    <div className='container copy_box_body'>
      
      <div className='box_body row'>
        <div className='code-box col-lg-12'>
          <p>your code/link here </p>
        </div>
        <div className='details col-lg-12'>
          <p>Share this code/link with participants</p>
        </div>
        <div className='col-lg-12'>
          <button className='button-copy btn'>Copy</button>
        </div>
      </div>
    </div>
  )
}

export default share_code