import './App.css';
import { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ReactComponent as Dotz } from './assets/Dotz.svg';
import navbar from './components/navbar';
//import useWindowDimensions from '../components/useWindowDimensions';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "Music",
      in: true,
      rot: 0
      }
  }
  render() { 
    // const {height, width} = useWindowDimensions();
    
    // console.log(width)
    const items = ['Music', 'About', 'Gallery', 'Contact', 'Links'];
    var cards = Object.keys(items).map(i => {
        return(
                <div className='row' onMouseOver={() => this.setState({word: items[i], rot: (60*i)})} key={items[i]}>
                  <a href={`/${items[i].toLowerCase()}`}>
                    {items[i]}
                  </a>
                </div>
        )
    })
    var subscript = <h2 id="subscript" key={this.state.word} className="fp-title-sub">{this.state.word}</h2>
    return (
      <div id="intro" className="App-body">      
        <Dotz style={{
          transition: `all 0.3s`,
          transform:`rotate(${this.state.rot}deg)`,
          position:`fixed`,
          opacity: 0.5,
          maxWidth:`90vw`
          }}/>  
        <div className="col" style={{zIndex:5}}>
          <h1>Shane Thiede</h1>
          <h3>Drummer, Engineer, Producer</h3>
          <div style={{marginTop: `20px`}}>
              {cards}
          </div>
        </div>
      </div>
      );
  }
}
 
export default Home;
