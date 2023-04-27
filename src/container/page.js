import Header from "../components/Header/header"
import Modal from '../pages/modal'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from '../components/footer/footer'
import { Outlet } from 'react-router-dom'

export default function Page() {
  const [ myData, setMyData ] = useState({
    data: null,
    err: null
  })

  const apiUrl = 'https://portfolio-api-y4pv.onrender.com/portfolio?limit=0'

  useEffect(() => {
    axios.get(apiUrl)
    .then(data => setMyData(prev => {
      return { ...prev, data: data.data.portfolio }
    }))
    .catch(e => {
      if(e.message.toLowerCase() === 'network error'){
        setMyData(prev => ({ ...prev, err: 'Please check your internet connection and try again'}))
      }else {
        setMyData(prev => ({ ...prev, err: 'Something went wrong :/ please try again later'}))
      }
    })
  }, [])

  return (
    <div>
        {myData.data ? 
        <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        </> : <Modal err={myData.err} />}
    </div>
  )
}
