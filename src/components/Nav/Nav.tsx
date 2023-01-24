import { Link } from 'react-router-dom'
import { ProfilePic } from '../ProfilePic'
import './styles.css'

const Nav = () => {
    return (
        <div id="nav">
            <div id="nav-content">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ProfilePic size={3} />
                    <h2 style={{ marginLeft: 10 }}>Brevan Mitchell</h2>
                </div>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">portfolio</Link>
                    </li>
                    <li>
                        <Link to="/resume">resume</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
