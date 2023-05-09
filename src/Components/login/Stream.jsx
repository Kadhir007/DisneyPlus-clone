import React from 'react'
import imgstream from './../../images/jugle.jpg';
import styled from 'styled-components';
function Download
() {
  return (
   <>
   <Section>
    <Container>
        <TextInfo>
        <h1 className='disney-titles'> Stream with Premier  Access the same day it's in Theaters
            </h1>
            <p>
                Coming April 2023 Get Premium Access to Marvel's Moon Girl and Devil Dinosaur for only 
                <span>&#8377;</span>299/Month and watch 
                as many times as you like.It's available to all Disney+ Subscribers
                at a later date.
            </p>
            <button type='button' className='btn-theme-disney' style={{justifyContent:'center'}}>PREORDER</button>
        </TextInfo>
        <ImgInfo>
        <img src={imgstream} alt=" in stream" />
        </ImgInfo>
    </Container>
   </Section>
   
   
   
   </>
  )
}
const Section=styled.section`
padding: 50px 5%;
position: relative;
background: transparent;

`;
const Container=styled.div`
display: flex;
align-items: center;

flex-direction: row-reverse;
justify-content: space-between;


@media screen and (max-width: 991px) {
    padding: 35px 50px;

}
@media screen and (max-width: 767px){
    padding: 25px;
}
@media screen and (min-width: 280px) and (max-width:500px ) {
    display: flex;
    flex-direction: column-reverse;
}

`;

// TextInfo
const TextInfo=styled.div`
margin-left:50px;


@media screen and (min-width:300px) and (max-width:500px) 
{
    margin-top: 121px;
    .btn-theme-disney{

    display: flex;
    margin-left:15%;
    outline: 0ch;
    position: relative;
   
   
    
    }
    
}
h1{
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    line-height: 2.6rem;
}
p{
    font-size: 1rem;
    font-weight: 100;
   
    
@media screen and (min-width:375px ) and (max-width:500px ) 
{
    font-size: 0.85rem;
    line-height: 1rem;
    margin-bottom:10px;
    margin-top: 30px;
}

@media screen and (min-width:280px ) and (max-width:374px ) 
    {
    font-size: 0.7rem;
    line-height: 1rem;
    margin-top: 3vh;
    margin-top: 20px;
    margin-bottom:10px;
}
}

`;

// Image Information
const ImgInfo=styled.div`
width: 40%;
flex: 0 auto;
opacity:1;
z-index: -1;
position: relative;
>img{
    width: 100%;
    max-width: 600px;
    height: auto;


}



@media screen and (min-width:200px ) and (max-width:499px ){
   height: 31vh;
   width: 100%;
   object-fit: contain;
   flex-direction: column;
}
`;



export default Download
