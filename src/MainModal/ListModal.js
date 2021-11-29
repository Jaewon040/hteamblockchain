import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import {description, eth, num, topic} from '../state';


const ListModal = ({show, onHide}) => {
return(
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {topic.contents} 
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        
        <p>
          {description.contents}<br></br><br></br>
          해당 챌린지의 도전 금액은 {eth.contents}ETH 입니다.
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide} style={{backgroundColor : 'white', color:'#4582ec'}  }>No</Button>
        <Button onClick={onHide}> Join</Button>
      </Modal.Footer>
    </Modal>
)
}

export default ListModal