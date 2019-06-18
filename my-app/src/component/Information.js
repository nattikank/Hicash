import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Image} from 'react-bootstrap';  
import places from '../images/placeholder(1).png';
import facebook from '../images/facebook.png';
import google from '../images/google.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';


export default class information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <Form className='container'>
      <Row style={{ justifyContent: 'center',alignItems: 'center',marginTop:'10px'}} xs="auto" sm="auto" >    
       <h1  style={{textDecoration:'underline',fontSize:'36px',color:'#d61525',paddingBottom:'10px'}}
       className="eiei" >ALL ABOUT ME</h1>
        </Row>

     <div style={{border:'1px solid',padding:'30px',borderColor:'gray'}}>
        <Row xs="auto" sm="auto">
        <h2 style={{fontSize:'28px',color:'#d61525'}}
       className="eiei">PROFILE</h2>
        </Row>
        <hr/>
        <Row xs="auto" sm="auto">
          <Col xs="auto" sm="auto">
        <p>Card ID : 1300099985214</p>
        <p>Name : nadech kugimiya</p>
        <p>BrithDay : 28/1/1996 &nbsp; &nbsp; &nbsp; Age : 26 Yaerold </p> 
        <p>Email : nadech.k@kkumail.com  &nbsp; &nbsp; &nbsp; Tel : 0998547766 </p>
        <p>Address : 598 khonkean ThaiLand 40156</p>
        </Col>
        </Row>
   

        
        
        <Row style={{marginTop:'10px'}} xs="auto" sm="auto">
        <h2  style={{fontSize:'28px',marginTop:'10px',color:'#d61525'}}
       className="eiei">Work</h2>
        </Row>
        <hr/>
        <Row xs="auto" sm="auto">
         
     <ul>
      <li>ประธานกรรมการบริหารและกรรมการผู้จัดการใหญ่ บริษัท เซ็นทรัลรีเทล คอร์ปอเรชั่น จำกัด</li>
   <li> ประธานกรรมการ บริษัท บิ๊กซี ซูปเปอร์เซ็นเตอร์ จำกัด (มหาชน)</li>
    <li>ประธานสมาคมผู้ค้าปลีกไทย</li>
   <li> ประธานคณะกรรมการธุรกิจค้าปลีก หอการค้าไทย</li>
    <li>ที่ปรึกษา สภาหอการค้าแห่งประเทศไทย</li>
    <li>กรรมการ, เหรัญญิก มูลนิธิเพื่อสิ่งแวดล้อม</li>
    </ul>
        </Row>
        
        <Row style={{marginTop:'10px'}}xs="auto" sm="auto">
        <h2  style={{fontSize:'28px',marginTop:'10px',color:'#d61525'}}
       className="eiei">Contact</h2>
        </Row>
        <hr/>
       
           <Row >
             <Col xs="12" sm="6" md='4'><Image src={places}/><label style={{marginLeft:'30px'}}>598 khonkean ThaiLand 40156 </label></Col>
             <Col xs="12" sm="6" md='4' ><Image src={facebook}/><label style={{marginLeft:'30px'}}>nadech kukimiya</label></Col>
             <Col xs="12" sm="6" md='4' ><Image src={google}/><label style={{marginLeft:'30px'}}>nadech.k@kkumail.com </label></Col>
           </Row>

           <Row style={{marginTop:'10px'}}>
           <Col xs="12" sm="6" md='4'><Image src={instagram}/><label style={{marginLeft:'25px'}}>nadech.k</label></Col>
           <Col xs="12" sm="6" md='4'><Image src={linkedin}/><label style={{marginLeft:'30px'}}></label>flashmoner.ln </Col>
           <Col xs="12" sm="6" md='4'><Image src={twitter}/><label style={{marginLeft:'30px'}}>@nadech.k</label></Col>
           </Row>
       
          
        <Row style={{marginTop:'10px'}}xs="auto" sm="auto">
        {/* <h2  style={{fontSize:'28px',marginTop:'10px'}}>Work</h2> */}
        </Row>
        <hr/>
        <Row style={{ justifyContent: 'center',alignItems: 'center'}}>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}EDIT PROFILE</Button>
        <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={{fontSize:'28px',color:'#d61525'}}>EDIT PROFILE</ModalHeader>
          <ModalBody>
          <Form>
          {/* <FormGroup>
          <Label >Card ID</Label>
          <Input  placeholder="NUMBER ID CARD"/>
        </FormGroup> */}
        <Row form>
          <Col md={8}>
            <FormGroup>
              <Label >Name</Label>
              <Input placeholder="Please input your name" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Age</Label>
              <Input placeholder="Please input your age" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Email</Label>
              <Input placeholder="Please input your Email" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label >Tel</Label>
              <Input placeholder="Please input your Tel" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>



      </Form>
          </ModalBody>

 <ModalHeader style={{fontSize:'28px',color:'#d61525'}}>EDIT WORK</ModalHeader>
          <ModalBody>
          <Form>
          <FormGroup>
          <Label >Your Work</Label>
          <Input  placeholder="input your work"/>
        </FormGroup>

      </Form>
          </ModalBody>

<ModalHeader style={{fontSize:'28px',color:'#d61525'}}>EDIT Contact</ModalHeader>
          <ModalBody>
          <Form>
          <FormGroup>
          <Label >Address</Label>
          <Input  placeholder="input your address"/>
        </FormGroup>
        <FormGroup>
          <Label >FaceBook</Label>
          <Input  placeholder="input your facebook"/>
        </FormGroup>
        <FormGroup>
          <Label >Google</Label>
          <Input  placeholder="input your Google"/>
        </FormGroup>
        <FormGroup>
          <Label >Instagram</Label>
          <Input  placeholder="input your Instagram"/>
        </FormGroup>
        <FormGroup>
          <Label >InLink</Label>
          <Input  placeholder="input your InLink"/>
        </FormGroup>
        <FormGroup>
          <Label >Twitter</Label>
          <Input  placeholder="input your Twitter"/>
        </FormGroup>
          
          
      </Form>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </Row>

</div>
      </Form>
    
    );
  }
}






