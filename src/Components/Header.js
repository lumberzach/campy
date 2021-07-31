import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/list' && <Button color={showAdd ? '#F98E8D' : ''} text={showAdd ? 'Close' : 'Add'} onClick= 
            {onAdd} />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Camping List'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
