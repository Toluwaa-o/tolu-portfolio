
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Searchbar({changer: autoScroller, bg}) {
    const [showNav, setShowNav] = useState(false)

    const toggle = () => {
        setShowNav(prev => !prev)
    }

    const [area, setArea] = useState(0)

    useEffect(() => {
        document.querySelectorAll('.part')[area].scrollIntoView()
    }, [area])

  return (
    
        <header>
            <h1>
                Tolúwa
            </h1>

            <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>

            <nav className={showNav ? 'navIn' : 'navOut'}>
                <div>
                    <h1>
                        Tolúwa
                    </h1>

                    <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </div>
                <ul>
                    <li onClick={toggle}>
                        <a href='#home'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path><path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path></svg>
                        <p>Home</p>
                        </a>
                    </li>

                    <li onClick={toggle}>
                        <a href='#about'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" ><path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path><path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path></svg>
                            <p>about</p>
                        </a>
                    </li>

                    <li onClick={toggle}>
                        <a href='#portfolio'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path><path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path></svg>
                            <p>Portfolio</p>
                        </a>
                    </li>

                    {/* <li onClick={toggle}>
                        <NavLink to='/contact'>
                            <p>Contact</p>
                        </NavLink>
                    </li> */}
                </ul>
            </nav>
        </header>
    
  )
}
