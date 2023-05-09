import React from 'react'
import styled from 'styled-components'
import i1 from './../../images/ForkyAsksAQuestion_en-US.jpg';
function GridSystem() {
  return (
    <>
    <Section>
        <Container>
            <Title>
               
                <h1 className='disney-titles'> Stream exclusive Disney+ Exclusives</h1>
                <p>New Stories from our incredible family studios</p>
                <Grid>
                    <Image>
                        <img src={i1} alt="Star wars" />
                        <img src={i1} alt="Star wars" />
                        <img src={i1} alt="Star wars" />
                        <img src={i1} alt="Star wars" />
                        <img src={i1} alt="Star wars" />
                       
                    </Image>
                </Grid>
            </Title>
        </Container>
    </Section>
    
    
        </>
  )
}
const Section=styled.section`
padding: 5vh 0;
position: relative;




`;
const Container=styled.div`
width: 100%;
margin: 0 auto;



`;
const Title=styled.div`

text-align: center;
margin-bottom: 3vh;
p{
    font-size: 1rem;
    @media screen and (max-width: 550px) {
        font-size: large.8rem;
    }
}

`;
const Grid = styled.div`
display: grid;
width: 100%;
gap: 15px 25px;
grid-template-columns: 3;

`;
const Image=styled.div`


width: 100%;
padding: 0;
border-radius: 0.245rem;
box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;


img{
    width: 200px;
    height: auto;
    object-fit: cover;
    border-radius: 0.245rem;
}
`;


export default GridSystem
