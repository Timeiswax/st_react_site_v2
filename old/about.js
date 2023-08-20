import React, { Component } from 'react';
import Header from '../components/header'


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Header />
                <div className="about-page">
                    <div className="paraCol">
                
                        <h1>About</h1>
                        <p><span>Depending on when you ask him,</span> Shane’s Dad will tell you that the Detroit, Michigan based Shane Thiede has been holding drumsticks in his hands since anywhere from 4 days to 4 weeks old. Any way you slice it, he started pretty early on. Shane’s Dad, a drummer himself, started Shane down the path that eventually led him to pick up bass in college, which led him to pick up guitar, which led him to pick up keys, which led him to writing songs…</p>
              
                        <p><span>Which led Shane to Setup and Payoff,</span> his most recent set of singles. Striking a vibe-y middle ground between honestly tackling his writer’s block and just sort of turning it into a joke about copyright infringement, Setup and Payoff are an eclectic, fun set of songs that weave in and out of genre convention.</p>
     
                        <p><span>Shane is currently spending time writing music for future releases</span> (for himself, as well as the Detroit-based indie group Bivouac Cabs), and trying to up his skills in songwriting, production, and in personal branding, which he finds difficult. Shane isn't the one writing this. He promises.</p>
                        <div style={{"padding":"60px"}}></div>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default About;
    
