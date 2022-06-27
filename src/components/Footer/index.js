import './style.css'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import logo from '../../assets/logo.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className='left'>
                <div className='info'>
                    <h1>Endereço</h1>
                    <div className='endereco'>
                        <span>Rua Cubos, 10</span>
                        <span>Jardim Academy</span>
                        <span>Salvador - Bahia - CEP 41820-021</span>
                    </div>
                    <div className='redes-sociais' >
                        <img src={facebook} />
                        <img src={instagram} />
                    </div>
                </div>
            </div>
            <div className='linha'>

            </div>

            <div className='right'>
                <img src={logo} />
            </div>
        </div>
    )
}

export default Footer