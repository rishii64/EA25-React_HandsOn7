import React from 'react'

export default function Contact() {
  return (
    <div className='contactForm'>
      <h2>Contact Me</h2>
      <form className='ContactForm'>
        <input type="text" placeholder='Enter Your Name' className='inputBox' />
        <input type="text" placeholder='Enter Subject' className='inputBox' />
        <input type="email" placeholder='Enter Your Email Address' className='inputBox' />
        <textarea className='MessageArea' placeholder='Enter Your Message'></textarea>
        <button className='submitBtn'>Submit</button>
      </form>
    </div>
  )
}
