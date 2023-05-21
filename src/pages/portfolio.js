import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Portfolio(props) {
  const [slides, setPage] = useState({
    num: null,
    currSlide: null
  })

  const [mis, setMis] = useState(null)

  const num = document.querySelectorAll('.port-items').length

  useEffect(() => {
    setPage({currSlide: 0, num: document.querySelectorAll('.port-items').length})
  }, [num])

  useEffect(() => {

    if(mis) {
      document.querySelectorAll('.port-items')[slides.currSlide].scrollIntoView()
    }

  }, [slides.currSlide])

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])


  return (
    <div id='portfolio' className="portfolio part">
      <h3>My Portfolio</h3>
      <svg onClick={() => {
        setMis(1)
        return setPage(prev => ({...prev, currSlide: prev.currSlide > 0 ? prev.currSlide - 1 : 0}))
      }} className='left' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
      <section className="slide">
        {props.data.map(i => {
          return (
            <div data-aos='flip-right' className='port-items' key={i._id}>
              <img className='desktop' src={i.desktopView} alt={i.title} />
              <img className='mobile' src={i.mobileView} alt={i.title} />
              <div>
                <h3>{i.name}</h3>
                <p className="port-desc">{i.description}</p>
                <section>
                  {i.toolsUsed.map(tool => <p className="" key={tool}>{tool}</p>)}
                </section>
                <Link to={i.link}>View live</Link>
              </div>
            </div>
          )
        })}
      </section>
      <svg onClick={() => {
        setMis(1)
        return setPage(prev => ({...prev, currSlide: prev.currSlide < prev.num - 2 ? prev.currSlide + 1 : prev.num - 1}))
      }} className='right' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
      <div className='pagination'>
     <span onClick={() => {
        if(props.page > 1 ){
          props.setPage(props.page - 1)
        }
      }} style={{background: props.page === 1 ? '#34495E70' : '#6e81ff'}}>
      <svg  xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
     </span>
      <p>Page {props.page} of {props.num}</p>
      <span onClick={() => {
        if(props.page < props.num){
          props.setPage(props.page + 1)
        }
      }} style={{background: props.page === props.num ? '#34495E70' : '#6e81ff'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" ><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
      </span>
      </div>
    </div>
  )
}