import './style.css'

function Card({ card, setModal, showModal, setShowModal }) {

    function handleModal() {
        setModal(card)
        setShowModal(!showModal)
    }

    return (
        <div
            className='container-card'
            onClick={() => handleModal()}
        >
            <img
                src={card.image}
                alt='foto'
            />
            <div className='descricao'>
                <span>{card.name}</span>
            </div>
            <div className='preco'>
                <span>{(card.oldPrice).toFixed(2)}</span>
                <h1>R$ {(card.currentPrice).toFixed(2)}</h1>
            </div>
            <div className='parcela'>
                <h1>6x R$ {(card.currentPrice / 6).toFixed(2)}</h1>
                <span>Sem juros</span>
            </div>

        </div>
    )
}

export default Card