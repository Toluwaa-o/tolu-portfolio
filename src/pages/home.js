import React from 'react'
import illustration from '../images/programmer.png'

export default function Home() {
  const date = new Date()
  const hour = date.getHours()
  let greeting
  if(hour >= 5 && hour < 12) greeting = 'Good Morning,'
  else if(hour >= 12 && hour < 17) greeting = 'Good Afternoon,'
  else greeting = 'Good Evening,' 

  return (
    <section className='home'>
      <img src={illustration} alt='coding illustration' />

    <div>
      <p className='greeting'>{greeting} my name is</p>

      <h2>
        Ogunleye Toluwalashe.
      </h2>

      <p className='description'>
      I am a 20 Year Old Full stack developer with a bachelor's degree in Computer Science. I specialize in the MERN Stack (MongoDB, Express, React & Node JS). I am eager to apply my knowledge and continue learning in a professional environment. Let's connect and discuss your project!
      </p>
    </div>
    </section>
  )
}
