import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import top_corner from '../Assets/images/accordian_corner1.png'
import bottom_corner from '../Assets/images/accordian_corner2.png'

function BasicExample() {
    return (
        <section className='bg-black'>
            <Container className='Container_main pb-5 '>
                <div className='py-3 py-lg-5'>
                    <div className='position-relative'>
                        <h2 className='accordion_heading text-light ff-audiowide py-2'>Faq</h2>
                        <div className="line-8 d-none d-lg-block"></div>
                    </div>
                </div>
                <Accordion defaultActiveKey="0" className='py-lg-5 accordion '>
                    <Accordion.Item eventKey="0" className='mb-4 position-relative'>
                        <img className='top_corner' src={top_corner} alt="" />
                        <img className='bottom_corner' src={bottom_corner} alt="" />
                        <Accordion.Header className='ff-montserrat'>Dui lectus auctor fermentum potenti enim. ?</Accordion.Header>
                        <Accordion.Body className='ff-montserrat'>
                            Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='mb-4 position-relative'>
                        <img className='top_corner' src={top_corner} alt="" />
                        <img className='bottom_corner' src={bottom_corner} alt="" />
                        <Accordion.Header className='ff-montserrat'>Placerat eros faucibus aliquam nunc, mattis</Accordion.Header>
                        <Accordion.Body className='ff-montserrat'>
                            Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='mb-4 position-relative'>
                        <img className='top_corner' src={top_corner} alt="" />
                        <img className='bottom_corner' src={bottom_corner} alt="" />
                        <Accordion.Header className='ff-montserrat'>Lorem nunc nunc risus viverra a</Accordion.Header>
                        <Accordion.Body className='ff-montserrat'>
                            Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='mb-4 position-relative'>
                        <img className='top_corner' src={top_corner} alt="" />
                        <img className='bottom_corner' src={bottom_corner} alt="" />
                        <Accordion.Header className='ff-montserrat'>In aliquet fusce id dictumst id</Accordion.Header>
                        <Accordion.Body className='ff-montserrat'>
                            Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='mb-4 position-relative'>
                        <img className='top_corner' src={top_corner} alt="" />
                        <img className='bottom_corner' src={bottom_corner} alt="" />
                        <Accordion.Header className='ff-montserrat'>Elementum pellentesque nisi, sagittis, </Accordion.Header>
                        <Accordion.Body className='ff-montserrat'>
                            Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
                        </Accordion.Body>
                    </Accordion.Item>
                    
                </Accordion>
            </Container>
        </section>
    );
}

export default BasicExample;