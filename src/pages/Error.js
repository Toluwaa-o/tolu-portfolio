import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='error'>
        <h1>Oh Oh, looks like we could not  find that page :/</h1>
        <Link to='/'>Home</Link>
    </div>
  )
}
