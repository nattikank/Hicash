import React from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import { Image } from 'react-bootstrap';
import pic1 from '../images/1.jpg'
import Header from './Header'
import Footer from './Footer'

function Privilege() {
    return (
        <div>
            <Header />
            <div className="container mb-3">

                <Row style={{ background: 'white', marginTop: 10, paddingTop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
                    <Col>
                        <Row>
                            <span><h4 style={{ color: '#e72b2c' }}> สิทธิพิเศษ </h4></span> <span><h4>  ของคุณ </h4> </span>
                        </Row>
                        <Row>
                            <Col xs="12" sm="4">
                                <Card body inverse style={{ backgroundColor: '#fff', borderColor: '#e72d2e' }}>
                                    <CardTitle style={{ color: '#e72d2e' }}>Special Title Treatment</CardTitle>
                                    <Image src={pic1} rounded className="img-style" />
                                    <CardText style={{ color: '#000' }}>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button color="warning">รับสิทธิ</Button>
                                </Card>

                            </Col>
                            <Col xs="12" sm="4">
                                <Card body inverse style={{ backgroundColor: '#fff', borderColor: '#e72d2e' }}>
                                    <CardTitle style={{ color: '#e72d2e' }}>Special Title Treatment</CardTitle>
                                    <Image src={pic1} rounded className="img-style" />
                                    <CardText style={{ color: '#000' }}>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button color="warning">รับสิทธิ</Button>
                                </Card>
                            </Col>
                            <Col sm="4">
                                <Card body inverse style={{ backgroundColor: '#fff', borderColor: '#e72d2e' }}>
                                    <CardTitle style={{ color: '#e72d2e' }}>Special Title Treatment</CardTitle>
                                    <Image src={pic1} rounded className="img-style" />
                                    <CardText style={{ color: '#000' }}>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button color="warning">รับสิทธิ</Button>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
            <Footer />
        </div>
    );
}

export default Privilege;
