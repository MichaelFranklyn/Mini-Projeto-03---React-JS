import './style.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import shoes from '../../data'
import { useState } from 'react';

function Main() {
  const [modal, setModal] = useState('')
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="container">
      <Header />
      <div className='conteudo'>
        {shoes.map((item) => (
          <Card
            key={item.id}
            card={item}
            setModal={setModal}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        ))}
      </div>
      <Footer />
      {showModal && <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modal={modal}
      />}
    </div>
  );
}

export default Main;
