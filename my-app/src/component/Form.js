import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import Image from 'react-bootstrap/Image'


import com2 from '../images/pic1.jpg'
export default class Forms extends React.Component {



  render() {
    return (
      <div>


        <Jumbotron >
          <Container>
            <Row>
              <Col md={6} >
                <Card  >
                  <Image src={com2} />
                </Card>
              </Col>
              <Col>
                <Card style={{ padding: '15px', height: 447 }} >
                  <Form style={{ marginTop: '30px' }} >
                    <Row form >
                      <Col md={12}>
                        <FormGroup>
                          <Label style={bold} >จำนวนเงินที่กู้ยืม</Label>
                          <Input type="text" />
                        </FormGroup>
                      </Col>

                      <Col md={12}>
                        <FormGroup>
                          <Label style={bold}>กำหนดระยะเวลาการกู้ยืม</Label>
                          <Input type="text" />
                        </FormGroup>
                      </Col>

                      <Col md={12}>
                        <FormGroup>
                          <Label style={bold}>เวลาที่กู้ยืมเงิน</Label>
                          <Input type="date" />
                        </FormGroup>
                      </Col>

                      <Col md={12}>
                        <FormGroup>
                          <Label style={bold}>บัญชีธนาคาร</Label>
                          <Input type="text" />
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup check>
                          <Label check style={bold} >
                            <Input type="checkbox" />{' '}
                            Check me out
            </Label>
                        </FormGroup>
                      </Col>
                      <Col style={{ marginTop: '10px' }}>
                        <Button block style={{ color: '#a62222', fontWeight: 'bold' }}>
                          ยืนยันการกู้ยืม
          </Button>
                      </Col>

                    </Row>
                  </Form></Card>
              </Col>
            </Row>

          </Container>
        </Jumbotron>


      </div>
    )
  }
}
const bold = {
  fontWeight: 'bold',
  color: '#a62222'
}






