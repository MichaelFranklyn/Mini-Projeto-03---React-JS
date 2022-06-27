import './style.css'
import close from '../../assets/close-icon.svg'

function Modal({ modal, showModal, setShowModal }) {
    return (
        <div className='background-modal'>
            <div className='modal'>
                <div className='close'>
                    <img
                        src={close}
                        onClick={() => setShowModal(!showModal)}
                        alt='close'
                    />
                </div>
                <div className='foto'>
                    <img src={modal.image} alt='foto' />
                </div>
                <div className='nome'>
                    <h1>{modal.name}</h1>
                    <p>{modal.description}</p>
                </div>
                <div className='rodape'>
                    <div className='esquerda'>
                        <button className='comprar'><strong>COMPRAR</strong></button>
                    </div>

                    <div className='direita'>
                        <div className='top'>
                            <span>R$ {(modal.oldPrice).toFixed(2)}</span>
                            <h2>R$ {(modal.currentPrice).toFixed(2)}</h2>
                        </div>
                        <div className='bottom'>
                            <h3>6x R$ {(modal.currentPrice / 6).toFixed(2)}</h3>
                            <span>Sem juros</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Modal