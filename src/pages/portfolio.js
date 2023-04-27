export default function Portfolio(props) {

  return (
    <section className='portfolio' id='portfolio'> 
    <div className="direction">
      <p>Click on the links to view the live page</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: '#251d1c'}}><path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"></path></svg>
    </div>
    
      <h3>Projects</h3>
      <div className='project-names'>
        <div className='names'>
        {props.data.map(i => {
          return (
              <p key={i._id}>{i.name} / <a href='i.link'>{i.link}</a></p>
          )
        })}
        </div>
        <div className='pages'>
          <h4>Pages:</h4>
          {props.num.map(x => {
            return (
              <p key={x} className='number' onClick={() => props.setPage(x)} style={{borderBottom: props.page === x && '3px solid #251d1c', fontWeight: props.page === x && '800'}}>{x}</p>
            )
          })}
        </div>
      </div>
    </section>
  )
}