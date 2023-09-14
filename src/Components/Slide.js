import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image'
import Place1 from "../Images/place1.webp";
import Place3 from "../Images/place3.jpg";
import On_space_place1 from "../Images/on_space_place1.jpg";
const Slide_Show = () =>{
    const Images = [
        Place1,
        Place3,
        On_space_place1
    ]
    return (
        <Slide>
              <div className="slide-img">
          <div style={{ backgroundImage: `url(${Images[0]})` }}>
            <span>Find Your Perfect Place To Enjoy With Friends & Family</span>
          </div>
        </div>
        <div className="slide-img">
          <div style={{ backgroundImage: `url(${Images[1]})` }}>
            <span>Find Your Perfect Place To Enjoy With Friends & Family</span>
          </div>
        </div>
        <div className="slide-img">
          <div style={{ backgroundImage: `url(${Images[2]})` }}>
            <span>Find Your Perfect Place To Enjoy With Friends & Family</span>
          </div>
        </div>
        </Slide>
    )
}
export default Slide_Show