import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick'
import styled from 'styled-components'
import s1 from './../../images/slide1.jpg'
import s2 from './../../images/slide2.jpg'
import s3 from './../../images/slide3.jpg'
import s4 from './../../images/slide4.jpg'
import s5 from './../../images/slide5.jpg'
import s6 from './../../images/slide6.jpg'
import s7 from './../../images/slide7.jpg'

function HomeBanner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <>
    
    
    <CarouselImgs{...settings}>
        <Wrap>
            <div><img src={s1} alt="s1" /></div>
        </Wrap>
        <Wrap>
            <div><img src={s2} alt="s2" /></div>
        </Wrap>
        <Wrap>
            <div><img src={s3} alt="s3" /></div>
        </Wrap>
        <Wrap>
            <div><img src={s4} alt="s4" /></div>
        </Wrap>
        <Wrap>
            <div><img src={s5} alt="s5" /></div>
        </Wrap>
        <Wrap>
            <div><img src={s6} alt="s6" /></div>
        </Wrap>
        <Wrap>
            <div><img src={s7} alt="s7" /></div>
        </Wrap>
    </CarouselImgs>
    
    </>
  )
}
const CarouselImgs=styled(Slider)`

margin-left: 40px;
margin-right: 40px;

ul li button{
    &::before{
        font-size: 11px;
        color: rgb(158,158,171)

        
    }
}
ul li.slick-active button{
    &::before{
        color: #fff !important;
    }
}
&>button{
    opacity: 0;
    z-index: 1500;
    width: 5vw;
    height: 100%;
    
    &:hover{
        opacity: 100;
        z-index: 2000;
        transition: opacity 0.2s ease 0s;
    }

}
.slick-prev{
    left: -60px;
}
.slick-next{
    margin-right: -30px;
}
.slick-list{
overflow:initial !important

}

`;



const Wrap =styled.div`

position: relative;
div{
    border-radius: 4px;
    padding: 4px;
    display: block;
    opacity: 1;
    z-index: 2000;
    box-shadow:  rgb(0 0 0/69%) 0px 26px 30px -10px,
                    rgb(0 0 0/75%) 0px 16px 10px -10px;
    cursor: default;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position:cover;
        border-radius: 4px;
        
    }
    &:hover{
        padding: 1px;
        border: 4px solid #fff;
        transition-duration: 200ms;
    }
}

`;
export default HomeBanner
