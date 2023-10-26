import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import section_3img from '../Assets/images/section_3img.png'

function Section_3() {
  return (
      <div>
          <section className='section_3bg pb-5'>
              <Container className='Container_main' >
                  <Row className=' py-lg-5'>
                      <Col lg={6}>
                          <div className='position-relative'>
                              <div className="line-3"></div>
                              <h2 className='section_3_heading ff-audiowide text-lg-start'>What is <span >CyberFPS</span></h2>
                          </div>
                          <p className='ff-montserrat section_3para pe-lg-5 py-2 py-lg-3'>CyberFPS is centered around 5v5 Search & Destroy style combat with P2E mechanics featuring the $AMMO Token and deep integrations within the CryptoStraps ecosystem.</p>
                          <p className='ff-montserrat section_3para pe-lg-5 pb-4 pb-lg-0'>CyberFPS pits 2 teams of 5 players against each other with the objective being to attack or defend depending on which side you start on. This "Search & Destroy" style combat has been implemented in many popular FPS titles and is a high-skill cap game mode.</p>
                      </Col>
                      <Col lg={6}>
                          <img className='w-100' src={section_3img} alt="" />
                      </Col>
                  </Row>
              </Container>
          </section>
    </div>
  )
}

export default Section_3