import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux'
import { selectHollywood, selectPopular, selectTrending, selectkidsTV, selectoriginal } from '../Redux/Reducers/MovieReducer'
const luca = "https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUFVhaO_X664r0rm7JnHruXvTN1yHEo-PvphLPxJR4Kd_Y0YkAvP2D55yLv4Jn5-j4N6y5jR7lxiCQw026Qfqwj_n28.jpg?r=103";

function Originals() {
  const movies=useSelector(selectoriginal);
  const trending=useSelector(selectTrending);
  const hollywood=useSelector(selectHollywood);
  const kids=useSelector(selectkidsTV);
  const popular=useSelector(selectPopular)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll: 2,
        touchMove: true, // enable touchMove
        swipeToSlide: true, // enable swipeToSlide
        autoplay:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
              slidesToShow: -4,
              
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              
              }
            },
            {
                breakpoint: 376,
                settings: {
                  slidesToShow: 1,
                
                }
            }
              
            
            
            
          ]


      };
  return (
    <>
    <Section>
        <h1>Originals </h1>
      <Carousel {...settings} >

        {
         movies &&
         movies.map((value, index) => {
           return (
             <Wrap key={index}>
               <div>
               <NavLink to={`/detail/${value.id}`}>
                   <img src={value.CardImg} alt={value.id} />
                 </NavLink>
               </div>
             </Wrap>
           );
         })
        }
      
      </Carousel>
      <h1>Trending </h1>
      <Carousel {...settings} >

        {
         trending &&
         trending.map((value, index) => {
           return (
             <Wrap key={index}>
               <div>
                 <NavLink to={`/detail/${value.id}`}>
                   <img src={value.CardImg} alt={value.id} />
                 </NavLink>
               </div>
             </Wrap>
           );
         })
        }
      
      </Carousel>      




      <h1>Hollwood for Disney </h1>
      <Carousel {...settings} >

        {
         hollywood &&
         hollywood.map((value, index) => {
           return (
             <Wrap key={index}>
               <div>
                 <NavLink to={`/detail/${value.id}`}>
                   <img src={value.CardImg} alt={value.id} />
                 </NavLink>
               </div>
             </Wrap>
           );
         })
        }
      
      </Carousel>      



      <h1>Disney for Kids </h1>
      <Carousel {...settings} >

        {
         popular &&
         popular.map((value, index) => {
           return (
             <Wrap key={index}>
               <div>
                 <NavLink to={`/detail/${value.id}`}>
                   <img src={value.CardImg} alt={value.id} />
                 </NavLink>
               </div>
             </Wrap>
           );
         })
        }
      
      </Carousel>


    </Section>
    </>
  )
}
const Section=styled.section`

padding: 0.5rem 0;
h1{
    font-size:1.7rem;
    font-weight: 300 !important;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(225,225,225,0,1) ;
    margin: 2vh 0 1vh 2rem;
    font-family: 'Hind',sans-serif !important;
    text-decoration: none;
    color: white;
    @media screen and (max-width :991px){
        font-size: 1.1rem;
    }
    @media screen and (max-width :550px){
        font-size: 0.9rem;
    }


}

`;

const Carousel=styled(Slider)`
width: 100%;
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
    opacity: 1;
    z-index: 1500;
    width: 5vw;
    height: 100%;
    
    /* &:hover{
        opacity: 100;
        z-index: 2000;
        transition: opacity 0.2s ease 0s;
    } */

}

.slick-prev{
    left: -60px;
}
.slick-next{
    margin-right: 60px;
}
.slick-list{
overflow:initial !important

}

`;



const Wrap =styled.div`

position: relative;
div{
    border-radius: 4px;
    padding: 5px;
    display: block;
    opacity: 1;
    z-index: 2000;
    box-shadow:  rgb(0 0 0/69%) 0px 26px 30px -10px,
                    rgb(0 0 0/75%) 0px 16px 10px -10px;
    cursor: default;
    img{
        width: 100%;
        height: 30vh;
        object-fit: fill;
        object-position:cover;
        border-radius: 4px;
        opacity: 1;
        z-index: 1500;
        position: relative;


        @media screen and (max-width :991px){
            width: 100%;
        height: auto;
        object-fit: cover;
    }
    @media screen and (max-width :550px){
        font-size: 0.9rem;
    }
        
    }
    &:hover{
        opacity: 1;
        z-index: 1500;
       
        padding: 0px;
        border: 4px solid rgba(249,249,249,0.8);
        transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
}

`;

export default Originals;
