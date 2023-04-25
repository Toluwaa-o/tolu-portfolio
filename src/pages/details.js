import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Details(props) {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`https://portfolio-api-y4pv.onrender.com/portfolio/${props.id}`)
    .then(res => setData(res.data.portfolio))
  }, [])

    const tools = data ? data.toolsUsed.map(tool => <p key={tool} className='tool-big'>{tool}</p>) : null;
  return (
    <>

    {data && <section className='details'>
        <div className='big-top'>
          <h3 id='title'>{data.name}</h3>
          <svg onClick={props.clear} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style={{fill: '#ffffff'}}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
        </div>

        <img className='desktop' src={data.desktopView} alt={props.name} />
        <img className='mobile' src={data.mobileView} alt={props.name} />

        <div className='big-details'>
            <p>{data.description}</p>
            <div><p>Built with: </p>{tools}</div>
            <p>View Live Site here: <a href={data.link}>{data.link}</a></p>
        </div>
        
    </section>}
    </>
  )
}
