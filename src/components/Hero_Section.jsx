import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import header_logo from '../Assets/images/header-logo.png'
import hero_bg from '../Assets/images/hero-bg.png'
import x_icon from '../Assets/images/twitter-icon.png'
import ig_icon from '../Assets/images/ig-icon.png'
import discord_icon from '../Assets/images/discord-icon.png'
import hero_logo from '../Assets/images/hero-logo.png'
import hero_img from '../Assets/images/hero_img.png'
function Hero_Section() {
  return (
    <div>
      <section className='hero_bg '>
        <Container className='Container_main'>
          <nav className='d-flex align-items-center justify-content-between'>
            <a href=""><img src={header_logo} alt="logo" className='pt-1' /></a>
            <ul id='Nav' className='Nav-Bar d-flex gap-4 pt-3'>
              <li><a className='nav_links nav_link ff-audiowide' href="">About</a></li>
              <li><a className='nav_links nav_link ff-audiowide' href="">CryptoStraps</a></li>
              <li><a className='nav_links nav_link ff-audiowide' href="">Team</a></li>
              <li><a className='nav_links nav_link ff-audiowide' href="">Faq</a></li>
              <li><a className='nav_links nav_link ff-audiowide' href="">Light Paper</a></li>
            </ul>
           
            <div className='d-flex gap-2 header-icons'>
              <a href=""><img src={x_icon} alt="" /></a>
              <a href=""><img src={ig_icon} alt="" /></a>
              <a href=""><img src={discord_icon} alt="" /></a>
            </div>
            <label for="iconbox" >
                        <span></span>
                        <span></span>
                        <span></span>
                    <input type="checkbox" id="iconbox" hidden></input>
                    </label>
          </nav>

            <Row className='d-flex  align-items-center'>
            <Col lg={6} className='d-flex flex-column align-items-center align-items-lg-start pb-5'> 
              <img src={hero_logo} alt="" />
              <p className='ff-audiowide hero_subline pb-5'>Web3 Gaming Reimagined</p>
              <div className='d-flex gap-4 pt-lg-5'>
                <button className='btn_1 ff-audiowide hover'>Get Started</button>
                <button className='btn_2 ff-audiowide hover'>Learn More</button>
              </div>
            </Col>
            <Col lg={6}>
              <img className='pt-2 hero-img' src={hero_img} alt="" />
            </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Hero_Section