
import './App.css';
import GridImage from './GridImage';
import Search  from './Search';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h3 className='bc'>GET Room<span className='renting'>.</span></h3>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Hotels</a>
          <a href="#">Guests</a>
          <a href="#">Contact Us</a>

        </div>


      </div>

      <div className='container-for-hero-forbelay'>
        <div className='hero-forbelay'>
          <h1>Find Your Room</h1>
          
          <p>Sometime , We want to remove a Query String Part of URL </p>
          <p className='bottom-one'>with Javascript In This Article.</p>

          <Search />
         {/* <div></div> 
         THIS is a place for the grey part used for searching
         */}
        </div>
       

      </div>

      <GridImage />


    </div>
  );
}

export default App;