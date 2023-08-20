
import React from 'react';
import Header from '../components/header'
import linksData from '../public/js/linksData'

const linkButtons = linksData.map(linkB => {
    console.log(linkB.text)
    return(
        <a href={linkB.link}  
            key={linkB.link} 
            className="link-button"
            style={{backgroundColor:linkB.color}}>
            <div >
                {linkB.text}
            </div>
        </a>
    )
})

const Links = () => {
    return ( 
        <div>
            <Header />
            <div className="full-page links-page">
                <div className="col" >
                    <h1>Links</h1>
                    <div className="col links-row">
                        {linkButtons}
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Links;