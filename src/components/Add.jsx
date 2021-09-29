import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const Add = () => {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [type, setType] = useState("")
  const [rating, setRating] = useState("")
  // handel the rating
  let handelRating=(x)=>setRating(x)
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div  >
            <button className="add" onClick={openModal}>Add</button>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form  className="Modale">
              <label >Movie Name</label>
              <input type="text" value={name} onChange={e=>setName(e.target.value)} />
              <label >Movie image</label>
              <input type="url" value={image} onChange={e=>setImage(e.target.value)} />
              <StarRating rating={rating}/>
              <label >Movie type</label>
              <input type="text" value={type} onChange={e=>setType(e.target.value)} />
              <div>
              <button className="add">Save</button>
              <button className="add" onClick={closeModal}>Cancel</button>
              </div>
          </form>
      </Modal>
        </div>
    )
}

export default Add
