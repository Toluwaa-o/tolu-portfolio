import Header from "../components/Header/header"
import Modal from '../pages/modal'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from '../components/footer/footer'
import About from "../pages/about"
import Portfolio from '../pages/portfolio'
import Home from "../pages/home"

export default function Page() {
  const [ myData, setMyData ] = useState({
    data: null,
    err: null,
    numOfPages: null, 
    page: 1
  })

  const [page, setPage] = useState(1)

  const apiUrl = `https://portfolio-api-y4pv.onrender.com/portfolio?page=${page}`

  useEffect(() => {
    axios.get(apiUrl)
    .then(data => setMyData(prev => {
      return { ...prev, data: data.data.portfolio, id: data.data.portfolio[0]._id, numOfPages: data.data.numOfPages, page: page }
    }))
    .catch(e => {
      if(e.message.toLowerCase() === 'network error'){
        setMyData(prev => ({ ...prev, err: 'Please check your internet connection and try again'}))
      }else {
        setMyData(prev => ({ ...prev, err: 'Something went wrong :/ please try again later'}))
      }
    })
    
  }, [page])


  return (
    <div>
        {myData.data ? 
        <>
        <Header />
        <main>
          <Home />
          <About />
          <Portfolio data={myData.data} page={myData.page} setPage ={setPage} num={myData.numOfPages} />
        </main>
        <Footer />
        </> : <Modal err={myData.err} />}
    </div>
  )
}
