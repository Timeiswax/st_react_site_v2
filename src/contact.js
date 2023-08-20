import React from 'react';
import Header from '../components/header';

const contact = () => {
    return ( 
        <div>
            <Header />
            <div className="full-page">
                <div className="col">
                    <h1 style={{marginBottom:"30px"}}>Contact</h1>
                    <p>Just shoot me an email at:</p>
                    <a style={{fontSize:"30px"}} href="mailto:shane@shanethiede.com">shane@shanethiede.com</a>
                    <img className="contact-pic" src="/jpg/000665040028.jpg" alt="me"></img>
                    <p>(Also I operate as Harmony Media, LLC for more formal business stuff)</p>
                </div>
            </div>

        </div>
     );
}
 
export default contact;