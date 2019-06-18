import React from 'react';
import Header from './Header';
import Slide from './slide';
import Footer from './Footer';
import Form from './Form';





export default class Home extends React.Component  {

  render(){
    return(
      <div >
        <div>
          <Header />
        </div>
        <div className="container">
          <Slide />
        </div>
        <div className="container">
          <Form />
        </div>
        <div >
          <Footer />
        </div>
      </div>
    )
  }
}