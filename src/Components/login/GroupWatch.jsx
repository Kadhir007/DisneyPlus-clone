import React from 'react'
import styled from 'styled-components'
import bg1 from './../../images/Soul_Groupwatch.jpg';
function GroupWatch() {
  return (
    <Section>
        <Container>
            <Content>
                <h1 className='disney-titles'>Virtual Movie Nights with <br /> GroupWatch</h1>
                
                    <li>Stream up to 6 friends </li>
                    <li> Pause, Rewind, React together</li>
                    <li>Easy Setup and Sharing</li>
                
            </Content>
        </Container>
    </Section>
  )
}
const Section=styled.section`

background: url(${bg1}) center/cover no-repeat;
height: 71vh;

display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
@media screen and (min-width:768px) and (max-width:1200px){
    height: 61vh;
    
    

}
@media screen and (min-width:280px) and (max-width:767px){
    height: 55vh;
    
    
}


`;

const Container=styled.div`
width: 91%;
margin: 0 auto;
@media screen and (min-width:280px) and (max-width:991px){
    width: 85%;
    
}

`;

const Content=styled.div`
margin-top: 17vf;
@media screen and (min-width:280px) and (max-width:1200px){
    height: 61px;
    margin-top: 13vf;
    margin-bottom:70px;
    
}
li{
    
    font-size: 1rem;
    font-weight: 300px;
    margin-left: 35px;
    @media screen and (min-width:280px) and (max-width:375px){
    font-size: 0.75rem;
    
    
}

}
h1{

    line-height: 2.4rem;
    margin-bottom: 0.8rem;
}

`;







export default GroupWatch
