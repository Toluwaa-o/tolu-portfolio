
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Searchbar({changer: autoScroller, bg}) {
    const [showNav, setShowNav] = useState(false)

    const toggle = () => {
        setShowNav(prev => !prev)
    }

  return (
    
        <header style={{background: `${bg}`}}>
            <h1>
                Tolúwa
            </h1>

            <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style={{fill: '#000'}}><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>

            <nav className={showNav ? 'navIn' : 'navOut'}>
                <div>
                    <h1>
                        Tolúwa
                    </h1>

                    <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style={{fill: '#000'}}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </div>
                <ul>
                    <li onClick={toggle}>
                        <NavLink onClick={() => autoScroller(0)} to='/'>
                        <p>Home</p>
                        </NavLink>
                    </li>

                    <li onClick={toggle}>
                        <NavLink onClick={() => autoScroller(1)} to='#skills'>
                        <p>Skills</p>
                        </NavLink>
                    </li>

                    <li onClick={toggle}>
                        <NavLink onClick={() => autoScroller(2)} to='#portfolio'>
                            <p>Portfolio</p>
                        </NavLink>
                    </li>

                    <li onClick={toggle}>
                        <NavLink onClick={() => autoScroller(3)} to='#about'>
                            <p>About</p>
                        </NavLink>
                    </li>

                    <li onClick={toggle}>
                        <NavLink onClick={() => autoScroller(4)} to='#contact'>
                            <p>Contact me</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    
  )
}
