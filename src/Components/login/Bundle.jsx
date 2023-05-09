import React from 'react'
import logo1 from './../../images/cta-logo-one.svg';
import styled from 'styled-components';

function Bundle() {
  return (
    <>
      <Section>
        <Container>
          <Content>
            <img src={logo1} alt="Disneylogo" />
            <p>
              Get the Disney bundle to Stream the best movies shows sports
              with Disney+ ,Hulu and ESPN+. <br />Tearms apply
            </p>
            <button type='button' className='btn-theme-disney'>Get Bundle</button>
          </Content>
        </Container>
      </Section>
    </>
  )
}

const Section = styled.section`

  width: 80%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  
`;

const Container = styled.div`

  margin: 0;
  outline: none;
  border: 1px white solid;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  
  flex-direction: row;

  @media screen and  (max-width:991px){
    height: 45vh;
    flex-direction: column;
    padding: 25px 35px;
    justify-content: center;
    
    @media screen and  (max-width:767px){
    
    padding: 25px 15px;
    

}
  }

`;

const Content = styled.div`
margin-top: 50px;
  text-align: center;

  > p {
    font-size: 1rem;
  }

  > img {
    
    width: 48%;
    flex: 0 auto;
    opacity: 1;
    z-index: 1500;
    @media screen and  (max-width:991px){
      width: 95%;
  }
  @media screen and (min-width: 415px) {
    font-size:0.5rem ;
    img{
      width: 20%;

    }
  }
  }
  > button {
   
  }


@media screen and (min-width:768px) and (max-width:1200px){
    height: 61vh;
    
    

}
@media screen and (min-width:280px) and (max-width:767px){
    height: 55vh;
    
    
    
}
`;

export default Bundle;
