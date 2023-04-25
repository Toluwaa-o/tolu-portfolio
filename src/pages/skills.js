import html from '../images/html.png'
import cSS from '../images/css.png'
import javascript from '../images/javascript.png'
import tailwind from '../images/tailwind.png'
import react from '../images/react.png'
import node from '../images/node-js.svg'
import express from '../images/express-js.png'
import mongodb from '../images/mongodb.png'
import github from '../images/github.png'
import firebase from '../images/firebase.png'
import mongoose from '../images/mongoose.png'
import restAPI from '../images/rest-api.jpg'
import illustration from '../images/skills.png'
import ScrollAnimation from 'react-animate-on-scroll'

export default function skills () {
    const data = [
        {name: 'HTML', image: html},
        {name: 'CSS', image: cSS},
        {name: 'Javasript', image: javascript},
        {name: 'Tailwind CSS', image: tailwind},
        {name: 'React', image: react},
        {name: 'Node JS', image: node},
        {name: 'Express JS', image: express},
        {name: 'Mongodb', image: mongodb},
        {name: 'Github', image: github},
        {name: 'Firebase', image: firebase},
        {name: 'Mongoose', image: mongoose},
        {name: 'API Development', image: restAPI}
    ]

    const mySkills = data.map(s => {
        return (
            <div key={s.name}>
                <img src={s.image} alt={s.name} title={s.name} />
            </div>
        )
    })

    return (
        <section className='skills' id='skills'>
            <img src={illustration} alt='illustration' />
            <div>
                <h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style={{fill: '#000'}}><path d="M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.144.206.38.996.591 1.921H8v2h8v-2h-.774c.213-.927.45-1.719.593-1.925.352-.503.726-.94 1.087-1.363zm-2.724.213c-.434.617-.796 2.075-1.006 3.075h-2.351c-.209-1.002-.572-2.463-1.011-3.08a20.502 20.502 0 0 0-1.196-1.492C7.644 11.294 7 10.544 7 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.521-.643 2.274-1.615 3.413-.373.438-.796.933-1.203 1.512z"></path></svg>
                My Skills
                </h2>
                <ScrollAnimation animateIn='bounceInRight' animateOut='bounceInLeft'>
                <div>
                {mySkills}
                </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}