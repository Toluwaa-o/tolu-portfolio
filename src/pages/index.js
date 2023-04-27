import { useEffect, useState } from 'react'
import Portfolio from './portfolio'
import Home from './home'
import Modal from '../pages/modal'
import axios from 'axios'

export default function Index() {
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
            setMyData(prev => ({ ...prev, err: 'Something wet wrong :/ please try again later'}))
          }
        })
        
      }, [page])

      let num = []
  
        for(let i = 1; i < Number(myData.numOfPages + 1); i++){
            num.push(i)
        }
    
  return (
    <>
    {myData.data ? <div className='index'>
            <Home />
            <Portfolio data={myData.data} page={myData.page} setPage ={setPage} num={num} />
        </div> : <Modal err={myData.err} />}
    </>
  )
}
