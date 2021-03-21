import React from 'react';
import { Container,Row,Col } from 'reactstrap';

function Contact (props){
    return (
        <Container>
            <Row>
                <Col xs='12' className='m-5'>
                    <h4>Developer Info:</h4>
                    <br/>
                    <i class="fa fa-address-card"></i> Mohammad Abdallah <br/>
                    <i class="fa fa-envelope-open"></i> m.abdalrazaq314@gmail.com <br/>
                    <i class="fa fa-phone"></i> +962786726978
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;