import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <p>Copyright &copy; 2021 || Made in Arizona 🌵</p>
            <Link to="/">Home {' '}</Link>
            <Link to="/list">List {' '}</Link>
            <Link to="/wildfires">Wildfires {' '}</Link>
            <Link to="/about">About {' '}</Link>
            
        </footer>
    )
}

export default Footer
