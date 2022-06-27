import './style.css'
import logo from '../../assets/logo.svg'

function Header() {
    return (
        <div className='header'>
            <h1>MODA MASCULINA</h1>
            <span>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</span>
            <img src={logo} alt='logo' />
        </div>
    )
}

export default Header