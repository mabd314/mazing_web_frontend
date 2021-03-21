import React from 'react';
import ReactLoading from 'react-loading';

import {Col,Container,Row} from 'reactstrap'

 function LoadingComponent(props){
     return (
        <Container>
            <Row>
                <Col>
                    <ReactLoading type='bars' color='#52C9FF' className='center' height={'20%'} width={'20%'}/>
                </Col>
            </Row>
        </Container>
     )
 }
 
export default LoadingComponent;
