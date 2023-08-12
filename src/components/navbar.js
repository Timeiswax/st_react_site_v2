import {ReactComponent as Dotz} from '../assets/Dotz.svg'
import {ReactComponent as Burg} from '../assets/burg.svg'
import './navbar.css'

function navbar() {
    return(
        <ul>
            <li><Dotz /></li>
            <li><h2>Shane Thiede</h2></li>
            <li><Burg /></li>
        </ul>
    )
}

export default navbar