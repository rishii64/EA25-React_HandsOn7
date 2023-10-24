import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  let nav = useNavigate()
  return (
    <div>
      <h1>Contact Me</h1>
      <form className='ContactForm'>
        <inputdetails>
          <label>Name: </label>
          <input type="text" placeholder='Enter Your Name' className='inputBox' />
        </inputdetails>

        <inputdetails>
          <label>Subject: </label>
          <input type="text" placeholder='Enter Subject' className='inputBox' />
        </inputdetails>

        <inputdetails>
          <label>E-mail: </label>
          <input type="email" placeholder='Enter Your Email Address' className='inputBox' />
        </inputdetails>

        <inputdetails>
          <label>Message: </label>
          <input className='MessageArea' placeholder='Enter Your Message'></input>
        </inputdetails>
      </form>

        <div className="btns">
          <button className='submitBtn'>Submit</button>
          <button className="backBtn" onClick={() => nav(-1)}>Go Back</button>
        </div>
    </div>
  )
}
