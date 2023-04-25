import React from 'react'
import {  Form, Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { BiDotsHorizontalRounded} from 'react-icons/bi';
import { BsChevronUp } from 'react-icons/bs';
import { HiOutlinePencil } from 'react-icons/hi';


function Messaging() {
  
  return (
    <>
    <div className="d-flex justify-contend-end messaging-container fixed-bottom">
  {['top'].map((placement) => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      
      overlay={
        <Popover id={`popover-positioned-${placement}`} className="popover-height">
          <Popover.Title as="h3"></Popover.Title>
          <Popover.Content className="messaging-content">
            <strong className="ml-1">Keep in touch with your network</strong>
            <Form>
      <Form.Group className="mb-3 mt-2">
        
        <Form.Control type="text" placeholder="Search for messages" />
      
      </Form.Group>
      </Form>
            
       
          </Popover.Content>
        </Popover>
      }
    >
      
      <Modal.Dialog>


  <Modal.Body className="mr-auto p-1">
  <div className="d-flex">
 
              
  <strong className="mr-3 messagingBase">Messaging</strong>
  <p className="ml-auto messagingBase">
  <BiDotsHorizontalRounded className="ml-2 messagingBase"/>
  <HiOutlinePencil className="ml-2 messagingBase"/>
  <BsChevronUp className="ml-2 messagingBase"/>
  </p>
  </div>
  </Modal.Body>


</Modal.Dialog>
    </OverlayTrigger>
  ))}
  </div>
</>
  )
}

export default Messaging