import React from 'react'
import './hiredev.css'
import { useState } from 'react'
import nodemailer from "nodemailer"
const HireDev = () => {
  return (
    
    <div className='App pt-3'>
      <div className='text-center'>
        <div>
        <input placeholder='Company name' className=' hire-inp'/></div><div>
        <input placeholder='Job role'  className=' hire-inp'/></div><div>
        <input placeholder="Recuiter's name"  className=' hire-inp'/></div><div>
        <input placeholder="Recuiter's email"  className=' hire-inp '/></div><div>
            <div>
        <button className='btn btn-danger btn-sm my-3'>Clear text</button></div>
        <textarea  cols="30" rows="15" placeholder="write an email"  className=' hire-inp hiredev-email-inp'>
            
        </textarea></div>
        <button className='hiredev-btn'>Send Email</button>
      </div>
    </div>
  )
}

export default HireDev
