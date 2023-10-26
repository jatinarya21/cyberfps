import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cryptostarp_img from '../Assets/images/cryptostrap_img.png'

function CryptoStraps() {
    return (
        <div>
            <section className='bg-black py-lg-5'>
                <Container className='Container_main'>
                    <Row className='py-4 py-lg-5 d-flex  align-items-center '>
                        <Col lg={6} className='d-flex align-items-center justify-content-center'>
                            <img className='crypto-img' src={cryptostarp_img} alt="" />
                        </Col>
                        <Col lg={6} className='position-relative d-flex flex-column align-items-center justify-content-center align-items-lg-start '>
                            <h2 className='ff-audiowide text-light crypto_heading pb-1'>CryptoStraps </h2>
                            <div className='line-4'></div>
                            <p className='ff-montserrat pt-2 pt-lg-2 text-center text-lg-start'>CryptoStraps are firearms pushing the boundaries of 3D animated art. CyberFPS will be powered by CryptoStraps $AMMO and is directly integrated with the existing CryptoStraps NFTs. You will be able to use CryptoStraps NFTs in-game and the visuals/graphics of CyberFPS are designed by the CryptoStraps 3D Studio.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    )
}

export default CryptoStraps