import './Search.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa, faCaretDown , faSearch  } from '@fortawesome/free-solid-svg-icons'
const Search = () => {
    return (
        <div>

            <div className="search-with">
                <div className="search-elements">

                    <p>Location ? <span className="drop-down"><FontAwesomeIcon icon={faCaretDown}/></span></p> 
                  <p className='pipeLine'>|</p>
                    <p>How Many Rooms ? <span className="drop-down"><FontAwesomeIcon icon={faCaretDown}/></span></p> 
                    <p className='pipeLine'>|</p>
                    <p>For How Many Days ? <span className="drop-down"><FontAwesomeIcon icon={faCaretDown}/></span></p> 
                    <p><span className="search-bar"><FontAwesomeIcon icon={faSearch}/></span>  </p>
                    <p><span className="search-bar">   </span>  </p>

                </div>
            </div>


        </div>
    )
}
export default Search;