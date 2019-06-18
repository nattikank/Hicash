import React from 'react';
import imlogo from '../images/loan.png';
import {Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <div>

                <Navbar className="bgheader" light expand="md">
                    <NavbarBrand className="text-danger" style={{ marginLeft: 50, fontSize: 25 }} href="/"><Image src={imlogo}></Image>FlashMoney</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar style={{marginRight: 0 }}>
                            <NavItem style={{padding: 5, textAlign: "center"}}>
                                <Link  to="/"><Button style={{width:75}}  color="danger">Home</Button></Link>
                            </NavItem>
                            <NavItem style={{padding: 5, textAlign: "center"}}>
                                <Link  to="/Acount"><Button style={{width:75}} color="danger">Acount</Button></Link>
                            </NavItem>
                            <NavItem style={{padding: 5, textAlign: "center"}}>
                                <Link  to="/Privilege"><Button style={{width:75}} color="danger">Privilege</Button></Link>
                            </NavItem>
                            <NavItem style={{padding: 5, textAlign: "center"}}>
                                <Link  to="/Register"><Button style={{width:75}} color="secondary">Register</Button></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

            </div>
        )
    }
}