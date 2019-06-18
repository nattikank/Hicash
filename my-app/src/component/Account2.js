import React from 'react';
import { Responsive, Segment, Grid, Image, Label, Icon } from 'semantic-ui-react'
import gift from '../images/gift.jpg'
import tel from '../images/tel.png'
import { ListGroupItem} from 'reactstrap';

import { ListGroup } from 'react-bootstrap'
import Header1 from './Header'
import Footer from './Footer'
import INformation from './Information'


export default class Account2 extends React.Component {



  render() {
  
    return (
      <div>
        <Header1 />
        <div className="container mt-3">
        
            <Image src={gift}  />
          
        </div>
        <div className="container mt-3 mb-3">


          <Grid columns='equal' className="App-center" >
            <Grid.Column >
              <Responsive as={Segment}>
                <div style={{textAlign: 'center'}}>
                  <Label as='a' basic color='red' pointing size='big'>
                    <div> <Image src={tel} width="90px" weight="90px"  />
                      081-xxxxxxx </div>
                  </Label>
                </div>
                <div style={{ marginTop: 10, textAlign: 'left' }}>

                  <ListGroup s>

                    <ListGroup.Item action variant="warning" href='/Users' >
                      <Icon circular inverted color='red' name='address card outline' /> ศูนย์สมาชิก
                  </ListGroup.Item>
                    <ListGroup.Item action variant="warning" href='//google.com' >
                      <Icon circular inverted color='red' name='money bill alternate outline' /> การกู้ยืมของฉัน
                  </ListGroup.Item>
                    <ListGroup.Item action variant="warning" href='//google.com' >
                      <Icon circular inverted color='red' name='id card outline' /> ข้อมูลของฉัน
                  </ListGroup.Item>
                    <ListGroup.Item action variant="warning" href='//google.com' >
                      <Icon circular inverted color='red' name='trophy' /> สิทธิพิเศษ
                  </ListGroup.Item>
                    <ListGroup.Item action variant="warning" href='//google.com' >
                      <Icon circular inverted color='red' name='clipboard' /> บัญชีรับเงินของฉัน
                  </ListGroup.Item>


                  </ListGroup>

                </div>
                <div style={{ marginTop: 10, textAlign: 'left' }}>
                  <ListGroup style={{ color: '#a62222' }}>
                    <h2> <Icon name='clipboard' />กิจกรรมล่าสุด</h2>
                    <ListGroupItem>กู้ค่าเช่าบ้าน</ListGroupItem>
                    <ListGroupItem>กู้ค่าเทอม 50000 บาท</ListGroupItem>
                    <ListGroupItem>ได้รับการอนุมัติการกูั</ListGroupItem>
                    <ListGroupItem>ส่งเอกสารพิจารณา</ListGroupItem>
                    <ListGroupItem>ตรวจสอบคุณสมบัติการกู้</ListGroupItem>
                  </ListGroup>
                </div>
              </Responsive>
            </Grid.Column>

            <Grid.Column width={12} mobile={12} tablet={10} computer={10}>
              <Responsive as={Segment}>
                <INformation />
          </Responsive>
            </Grid.Column>

          </Grid>


        </div>
        <Footer />
      </div>
    )
  }
}