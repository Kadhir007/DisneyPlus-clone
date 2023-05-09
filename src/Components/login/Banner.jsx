import React from 'react'
import styled from 'styled-components';

import logo1 from './../../images/cta-logo-one.svg';
import logo2 from './../../images/cta-logo-two.png';
import b1 from './../../images/login-background.jpg';

function banner() {
  return (
    <>
      <Background>
        <Container>
          <Content>
            <img src={logo1} alt="Logo1" />
            <button type='button' className='get-bundle-btn'  >Get Disney Bundle</button>
            <h4>Stream Now: Terms Appply</h4>
            <img src={logo2} alt="Logo2" />
            <button type='button' className='links'>Sign Up for Disney+</button>
            <button type='button' className='links text-gray'> <span>&#8377;</span>299/Month or <span>&#8377;</span>1499/Year</button>
          </Content>

        </Container>

      </Background>
    </>
  )
}
const Background = styled.section`
background: url(${b1});
height:95vh;
background-position: center;
background-size: cover;
background-size: no-repeat;
display: flex;
flex-direction: column;
object-fit:contain;
justify-content: center;

@media screen and (min-width: 768px) and (max-width:1200px) {
  height:85vh;
}
@media screen and (min-width: 200px) and (max-width:767px) {
  height:75vh;
}
`;
const Container = styled.div`
width:85%;
margin:0 auto;

`;
const Content = styled.div`
width:100%;
height: auto;
object-fit:contain;
margin: 0 auto;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
.get-bundle-btn:hover{
  
  background-color: #0099ff ;

}
@media screen and (min-width: 768px) and (max-width:1200px) {
  max-width:550px;
}
@media screen and (min-width: 200px) and (max-width:767px) {
  max-width:450px;
  margin-top: 13vh;
}
  @media screen and (min-width: 768px) and (max-width:1200px) {
    max-width:350px;
  margin-top: 13vh;
}
@media screen and (min-width: 200px) and (max-width:767px) {
  max-width:auto;
  margin-top: 13vh;
}

h4{
  margin: 1vh 0; 
  color: #fff;

}

img{
  width: 100%;
  height: 100%;
  display: auto;
  max-width: 600px;
  object-fit:contain;
  margin-bottom: 1vh;

}
>.get-bundle-btn{
  outline: none;
  border:none;
  padding: 11.5px 15px;
  width: 90%;
  align-items: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: #0063e5;
  color: #f9f9f9;
  font-size: 18px;
  border-radius: .345rem;
  cursor: pointer;



@media screen and (min-width: 550px) and (max-width:1200px) {
  padding: 10px 0;
  font-size: 15px;

}
@media screen and (min-width: 200px) and (max-width:767px) {
 padding: 5px 0;
 font-size: 14px;
}
 }
 >.links{
  outline: none;
  border: none;
  font-size: 19px;
  background: transparent;
  color: #f9f9f9;
  margin-top:1vh;
  cursor: pointer;
  @media screen and (min-width: 768px) and (max-width:1200px) {
  font-size: 15px;
}
>.text-gray{
  color: gray;
}
 }
`;

export default banner
