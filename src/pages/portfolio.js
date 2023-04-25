import ScrollAnimation from 'react-animate-on-scroll'
import Details from '../pages/details'
import {useState} from 'react'

export default function Portfolio(props) {
  const [id, setId] = useState(null)

  const portf = props.data.map(i => {
    return (
      <div onClick={() => setId(i._id)} key={i._id}>
        <ScrollAnimation animateIn='fadeIn' delay={2} animateOut='fadeOut'>
        <img src={i.desktopView} alt={i.name} />
        <h4>{i.name}</h4>
        <div className='tools'>
          {i.toolsUsed.map(t => <p key={t}>{t}</p>)}
        </div>
        <p className='trigger'>View details</p>
        </ScrollAnimation>
      </div>
    )
  })

  const clearId = () => setId(null)

  return (
    <>
    <section className='portfolio' id='portfolio'>
      <h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1zM5 19a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1H5zm15-1a1 1 0 0 1-2 0v-5h2v5z"></path><path d="M6 7h8v2H6zm0 4h8v2H6zm5 4h3v2h-3z"></path></svg>
        My Portfolio</h2>
      
      <div className='flex'>
        {portf}
      </div>
    </section>
    {id && <Details clear={clearId} id={id} />}
    </>
  )
}
