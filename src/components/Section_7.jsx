import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import solana from '../Assets/images/solana_img.png'
import unreal from '../Assets/images/unreal_img.png'

function Section_7() {
  return (
      <div>
          <section className='min-vh-65 py-5 d-flex section_3bg'>
              <Container className='Container_main d-flex align-items-center justify-content-center'>
                  <Row className='d-flex gap-4 gap-lg-0 justify-content-center'>
                      <Col sm={7} >
                          <img  className='section_7img w-100' src={solana} alt="" />
                      </Col>
                      <Col sm={5}  >
                          <img className='section_7img2 w-100' src={unreal} alt="" />
                      </Col>
                  </Row>
              </Container>
          </section>
    </div>
  )
}

export default Section_7