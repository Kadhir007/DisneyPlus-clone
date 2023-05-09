import React from 'react'
import backpanther from './../../images/BlackPanther.jpg'
import styled from 'styled-components'
function MarvelStudios() {
  return (
    <>
    <Section>
        <Container>
            <Content>
                    <h1 className='disney-titles'>Endless Entertainment</h1>
                    <p>Disney classics, Pixar adventures,Marvel epics,Star Wars sagas, Natural Geographic explorations, and more</p>

            </Content>

        </Container>
    </Section>
    
    
    
    
    </>
  )
}
const Section=styled.section`
background: url(${backpanther} )center/cover no-repeat;
height: 71vh;
display:flex;
align-items: end;
flex-direction: column;
justify-content: center;
@media screen and (min-width:768px) {
    height: 79vh;
    object-fit: contain;
    object-position: center;    
    
}
@media screen and (max-width:500px){
    height: 55vh;
    object-fit: contain;
    object-position: center;
    
}

`;

const Container=styled.div`
width: 91%;
margin:0 auto;

@media screen and (max-width:400px){
    height: 61px;
    margin-top: 13vf;
    
}

`;
const Content=styled.div`

display: flex;
text-align: end;
flex-direction: column;
@media screen and (min-width:280px) and (max-width:1200px){
   
    
    
}

`;
export default MarvelStudios
