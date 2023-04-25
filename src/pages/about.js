import React from 'react'
import Illustration from '../images/illustration-2.png'

export default function about() {
  return (
    <section id='about' className='about'>
      <img src={Illustration} alt='illustration' />

      <div>
      <h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M12 10c1.151 0 2-.848 2-2s-.849-2-2-2c-1.15 0-2 .848-2 2s.85 2 2 2zm0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6z"></path><path d="M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3 3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-5 15-2 2-2-2H5V4h14l.002 13H14z"></path></svg>
        About me
      </h2>

      <p>
      Hi, I'm Toluwalashe, a 20-year-old self-taught full-stack developer passionate about web development. My degree in computer science gave me a strong foundation in programming, but most of my skills were self-learned. I'm proficient in HTML, CSS, JavaScript, React, TailwindCSS, nodejs/express js, MongoDB, and Mongoose.
      <br/>
      <br/>
      I learn new technologies quickly and enjoy exploring new things. My code is clean, scalable, and easy to maintain. In my free time, I listen to music and watch football games. I'm eager to create innovative solutions for real-world problems and make a significant impact in the field of web development.
      </p>
      </div>
    </section>
  )
}
