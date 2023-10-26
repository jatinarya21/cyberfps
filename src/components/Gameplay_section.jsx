import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import gameplay_img from '../Assets/images/gameplay_img.png'
import { Container } from 'react-bootstrap'
import play_icon from '../Assets/images/play_icon.png'
import gameplay from '../Assets/images/GIF/gameplay.gif'

function Gameplay_section() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <section>
                <Container className="Container_main py-5">
                    <div className='position-relative pt-3'>
                        <div className="gameplay_line1"></div>
                        <div className="gameplay_line2"></div>
                        <h1 className='text-center gameplay_heading ff-audiowide'>CyberFPS <span>Gameplay</span></h1>
                    </div>
                    <div className='position-relative'>
                        <Button className='play_btn' variant="" onClick={handleShow}>
                           <img src={play_icon} alt="" />
                        </Button>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title className=''>Game<span className='clr-green'>Play</span></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img src={gameplay} alt="" className='w-100' />
                            </Modal.Body>
                        </Modal>
                        <img src={gameplay_img} className='w-100 mt-xl-5 mt-2 mt-sm-3 pb-sm-3 mb-xl-0 pt-xl-4' />
                        <a href=""></a>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Gameplay_section