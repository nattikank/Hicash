import React from 'react';
import Image from 'react-bootstrap/Image'
import facebook from '../images/facebook.png'
import google from '../images/google.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import {Link } from 'react-router-dom';

export default class Footer extends React.Component{
    
      

 render(){
  return (
    <div>
        
       
       
<footer className="page-footer font-small " style={{background:'#F0F0F0', height:150}}>


<div className="footer-copyright text-center py-3" >
<div style={{marginTop:'20px'}} >
<Image  src={facebook} />
<Image  src={google} />
<Image  src={instagram}/>
<Image  src={linkedin}/>
<Image  src={twitter} /><br/><br/></div>
© 2018 Copyright:<Link to="/"> FlashMoney.com</Link>
</div>


</footer>
    </div>

    
    )
 }
}





