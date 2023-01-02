import Image1 from './assets/image1.jpg'

import Image2 from './assets/image2.jpg'
import Image3 from './assets/image3.jpg'
import './Grid.css'
const GridImage = () => {
    return (
        <div className="grid-images">

            <div className='container-for-images'>
            <div className="images">


            

            <img src={Image1} alt="image-hotel"  className='image1'/>
            </div>
            <div className="images">

            <img src={Image2} alt="image-hotel"  className='image1'/>
            </div>
            <div className="images">

            <img src={Image3} alt="image-hotel"  className='image1'/>
            </div>

            </div>       
        
        </div>

    );
}
export default GridImage;