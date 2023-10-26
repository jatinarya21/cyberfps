import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Team_img1 from '../Assets/images/Team_img1.png'
import Team_img2 from '../Assets/images/Team_img2.png'
import Team_img3 from '../Assets/images/Team_img3.png'
import Team_img4 from '../Assets/images/Team_img4.png'


function Team_Section() {
  return (
      <div>
          <section className='py-3 py-lg-5'>
              <Container className='py-2 py-lg-5'>
                  <div className='position-relative pt-lg-5'>
                      <h2 className='ff-audiowide Team_heading'>Team</h2>
                      <div className="line-6"></div>
                  </div>
                  <Row className='pt-lg-5'>
                      <Col md={6} lg={3}>
                          <div className="card_main d-flex flex-column pt-4">
                              <img className='team_img' src={Team_img1} alt="" />
                              <p className='text-lg-start ff-montserrat team_name'>Collin</p>
                              <p className='text-lg-start ff-montserrat team_designation'>Founder</p>
                          </div>
                    </Col>
                      <Col  md={6} lg={3}>
                          <div className="card_main d-flex flex-column pt-4">
                              <img className='team_img' src={Team_img2} alt="" />
                              <p className='text-lg-start ff-montserrat team_name'>Pharaox</p>
                              <p className='text-lg-start ff-montserrat team_designation'>Founder</p>
                          </div>
                    </Col>
                      <Col  md={6} lg={3}>
                          <div className="card_main d-flex flex-column pt-4">
                              <img className='team_img' src={Team_img3} alt="" />
                              <p className='text-lg-start ff-montserrat team_name'>Zach</p>
                              <p className='text-lg-start ff-montserrat team_designation'>CM</p>
                          </div>
                    </Col>
                      <Col  md={6} lg={3}>
                          <div className="card_main d-flex flex-column pt-4">
                              <img className='team_img' src={Team_img4} alt="" />
                              <p className='text-lg-start ff-montserrat team_name'>Arlen</p>
                              <p className='text-lg-start ff-montserrat team_designation'>CM</p>
                          </div>
                    </Col>
                  </Row>
              </Container>
          </section>
    </div>
  )
}

export default Team_Section