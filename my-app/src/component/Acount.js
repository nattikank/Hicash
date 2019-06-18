import React from 'react';
import {Responsive, Segment, Grid, Image, Label, Icon } from 'semantic-ui-react'
import gift from '../images/gift.jpg'
import tel from '../images/tel.png'
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap';
import Header from '../component/Header'
import {Link } from 'react-router-dom';
import Information from './Information'
import Footer from './Footer'

export default class Account extends React.Component {

    static propTypes = {
        color: PropTypes.string,
    }
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {

        return (
            <div>
                <Header />
                <div className="container mt-3" >
                    <Image src={gift} ></Image>
                </div>
                <div className="mt-3">
                
                   
                </div>
                    <Footer />
            </div>
        )
    }
}


// import React from 'react';
// import { Image } from 'react-bootstrap';
// import gift from '../images/gift.jpg';
// import Header from '../component/Header';
// export default class Account extends React.Component {


//     render() {

//         return (
//             <div>
//                 <Header />
//                 <div className="container mt-3 p-0">
//                     <Image src={gift} fluid ></Image>
//                 </div>
//                 <div className="container">
//                     <div className="row ">
//                         <div className="col-md-4" style={{ backgroundColor: "#ffffff" }}>
//                             <h1>GGGG</h1>
//                         </div>
//                         <div className="col-md-8" style={{ backgroundColor: "#ffffff" }}>
//                             <h1>HHHH</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }