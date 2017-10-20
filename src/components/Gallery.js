import React, { Component } from 'react';

import Lightbox from 'react-image-lightbox';

import imageOne from "../images/gallery/gallery_one.png"
import imageTwo from "../images/gallery/gallery_two.png"
import imageThree from "../images/gallery/gallery_three.png"
import imageFour from "../images/gallery/gallery_four.png"
import imageFive from "../images/gallery/gallery_five.png"
import imageSix from "../images/gallery/gallery_six.png"
import imageSeven from "../images/gallery/gallery_seven.png"
import imageEight from "../images/gallery/gallery_eight.png"
import imageNine from "../images/gallery/gallery_nine.png"
import imageTen from "../images/gallery/gallery_ten.png"
import imageEleven from "../images/gallery/gallery_eleven.png"
import imageTwelve from "../images/gallery/gallery_twelve.png"
import imageThirteen from "../images/gallery/gallery_thirteen.png"
import imageFourteen from "../images/IMac.png"



const images=[
  imageOne,imageTwo,imageThree,imageFour,imageFive,imageSix,imageSeven,imageEight,imageNine,imageTen,imageEleven,imageTwelve,imageThirteen,imageFourteen
]
class Gallery extends Component{
  constructor(props){
    super(props)
    this.state = {
      photoIndex: 0,
      isOpen: false
    }
  }


  render(){

    const {
      photoIndex,
      isOpen,
    } = this.state;

    return(
      <div>
        <div className="Gallery_images">
          <div className="Gallery_images_div">
            <img src={imageFourteen} className="Gallery_image Gallery_image_one"  alt=""  width="100px"  onClick={() => this.setState({ isOpen: true, photoIndex:13 })} />
          </div>
          <div className="Gallery_images_div">
            <img src={imageOne} className="Gallery_image Gallery_image_two" alt=""    onClick={() => this.setState({ isOpen: true, photoIndex:0 })} />
          </div>
          <div className="Gallery_images_div">
            <img src={imageTwo} className="Gallery_image Gallery_image_three" alt=""    onClick={() => this.setState({ isOpen: true, photoIndex:1 })} />
          </div>
          <div className="Gallery_images_div">
            <img src={imageThree} className="Gallery_image Gallery_image_four" alt=""    onClick={() => this.setState({ isOpen: true, photoIndex:2 })} />
          </div>
        </div>
        <div className="Gallery_images">
          <div className="Gallery_images_div">
            <img src={imageFour} className="Gallery_image Gallery_image_five" alt=""    onClick={() => this.setState({ isOpen: true, photoIndex:3 })} />
          </div>
          <div className="Gallery_images_div">
            <img src={imageFive} className="Gallery_image Gallery_image_six" alt=""     onClick={() => this.setState({ isOpen: true, photoIndex:4 })} />
          </div>
          <div className="Gallery_images_div">
            <img src={imageSix} className="Gallery_image Gallery_image_seven" alt=""     onClick={() => this.setState({ isOpen: true, photoIndex:5 })} />
          </div>
          <div className="Gallery_images_div">
            <img src={imageSeven} className="Gallery_image Gallery_image_eight" alt=""    onClick={() => this.setState({ isOpen: true, photoIndex:6 })} />
          </div>
        </div>
        <div className="Gallery_images">
          <div className="Gallery_images_div">
            <img src={imageEight} className="Gallery_image Gallery_image_nine" alt=""    onClick={() => this.setState({ isOpen: true, photoIndex:7 })} />
          </div>
          <div className="Gallery_images_div">
            <img src={imageNine} className="Gallery_image Gallery_image_ten" alt=""    onClick={() => this.setState({ isOpen: true, photoIndex:8})} />
          </div>
          <div className="Gallery_images_div">
            <img src={imageTen} className="Gallery_image Gallery_image_eleven" alt=""    onClick={() => this.setState({ isOpen: true, photoIndex:9 })} />
          </div>
          <div className="Gallery_images_div">
            <img src={imageEleven} className="Gallery_image Gallery_image_twelve" alt=""    onClick={() => this.setState({ isOpen: true, photoIndex:10 })} />
          </div>
        </div>
        <div className="Gallery_images">
          <div className="Gallery_images_div">
            <img src={imageTwelve} className="Gallery_image Gallery_image_thirteen" alt=""     onClick={() => this.setState({ isOpen: true, photoIndex:11 })} />
          </div>
          <div className="Gallery_images_div">
            <img src={imageThirteen} className="Gallery_image Gallery_image_fourteen" alt=""    onClick={() => this.setState({ isOpen: true, photoIndex:12 })} />
          </div>
        </div>
        <span className="Gallery_inner_style">o</span>
        <div className="Gallery_inner"></div>
        {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
                    />
                }

      </div>

    )
  }
}
export default (Gallery);
