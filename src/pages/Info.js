import Skills from './skills'
import About from './about'

export default function Info() {
  return (
    <div className='info'>
      <About />
      <div className='info-links'>
        <a href='mailto:asheogunleye@gmail.com'>asheogunleye@gmail.com <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: '#251d1c', transform: 'rotate(-35deg)'}}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg></a>
        <a href='https://github.com/Toluwaa-o'>https://github.com/Toluwaa-o <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: '#251d1c', transform: 'rotate(-35deg)'}}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg></a>
        <a href='https://twitter.com/toiuwa'>https://twitter.com/toiuwa <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: '#251d1c', transform: 'rotate(-35deg)'}}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg></a>
      </div>
      <Skills />
    </div>
  )
}
