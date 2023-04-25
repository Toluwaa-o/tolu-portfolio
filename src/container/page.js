import Header from "../components/Header/header"
import Home from '../pages/home'
import About from '../pages/about'
import Portfolio from '../pages/portfolio'
import Contact from '../pages/contact'
import Skills from '../pages/skills'
import Modal from '../pages/modal'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from '../components/footer/footer'

export default function Page() {
  const [ myData, setMyData ] = useState({
    data: null,
    id: null,
    err: null,
  })

  const [bg, setBg] = useState('#00C1B5')

  const [myX, setX] = useState(0)

  useEffect(() => {
    axios.get('https://portfolio-api-y4pv.onrender.com/portfolio')
    .then(data => setMyData(prev => {
      return { ...prev, data: data.data.portfolio }
    }))
    .catch(err => setMyData(prev => ({ ...prev, err: err.message})))
  }, [])

  window.addEventListener('scroll', () => {
    if(document.querySelectorAll('section')[0].getBoundingClientRect().bottom >= (window.innerHeight * 0.5)){
      setBg('#00C1B5')
    }

    else if(document.querySelectorAll('section')[1].getBoundingClientRect().bottom >= (window.innerHeight * 0.5)){
      setBg('#A4C9D8')
    }

    else if(document.querySelectorAll('section')[2].getBoundingClientRect().bottom >= (window.innerHeight * 0.5)){
      setBg('#FD821D')
    }

    else if(document.querySelectorAll('section')[3].getBoundingClientRect().bottom >= (window.innerHeight * 0.5)){
      setBg('#ffffff')
    }

    else if(document.querySelectorAll('section')[4].getBoundingClientRect().bottom >= (window.innerHeight * 0.5)){
      setBg('#FFD0D5')
    }
  }
  )

  const autoScroller = (index) => {
    setX(index)
  }

  useEffect(() => {
    if(myData.data){
      document.querySelectorAll('section')[Number(myX)].scrollIntoView({ behavior: 'smooth'})
    }
  }, [myX])

  return (
    <div style={{background: `${bg}`}}>
        {myData.data ? 
        <>
        <Header changer={autoScroller} bg={bg} />
        <main>
          <Home />
          <Skills />
          <Portfolio data={myData.data} />
          <About />
          <Contact />
        </main>
        <Footer />
        </> : <Modal />}
    </div>
  )
}
