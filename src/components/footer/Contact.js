import React from 'react'

const Contact = () => {
  return (
    <div className='d-inline-block'>
        <div className='send-a-message'>
     Send a message to Gifty Austin:</div>
     <div className=''>
        <div >
     <input type='email' className='c-email-message-h c-email-inp my-3' placeholder='Your email'/></div>
     <div>
     <textarea type='text' rows={10} className='c-email-message-h c-message-inp my-3' placeholder='Message'/></div></div>
    <button className='contact-send-btn'>Send</button>
    </div>
  )
}

export default Contact
