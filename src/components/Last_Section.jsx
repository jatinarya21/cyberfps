import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import footer_logo from '../Assets/images/footer_logo.png'
import x_icon from '../Assets/images/twitter-icon.png'
import ig_icon from '../Assets/images/ig-icon.png'
import discord_icon from '../Assets/images/discord-icon.png'

function Last_Section() {
  return (
      <div>
          <section className='bg-black'>
              <Container className='pt-4'>
                  <img src={footer_logo} alt="" />
                  <div className='d-flex align-items-center justify-content-center gap-3 header-icons pt-3 pb-4'>
                      <a href=""><img src={x_icon} alt="" /></a>
                      <a href=""><img src={ig_icon} alt="" /></a>
                      <a href=""><img src={x_icon} alt="" /></a>
                  </div>
              </Container>
            <div className="line-9"></div>
          </section>
          <section className='bg-black'>
              <Container>
                <h2 className='footer-txt ff-montserrat py-3 text-light'>© Cyber FPS 2022</h2>
              </Container>
          </section>
    </div>
  )
}

export default Last_Section