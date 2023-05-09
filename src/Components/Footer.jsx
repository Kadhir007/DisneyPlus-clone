import React from 'react';
import styled from 'styled-components';
import logo from './../images/viewers-disney.png';

function Footer() {
  return (
    <Section>
      <Container>
        <FooterBrand>
          <img src={logo} alt="the disney logo" />
        </FooterBrand>
        <Nav>
          <li>English</li>
          <li>Subscriber Agreement</li>
          <li>Privacy Policy</li>
          <li>Your Indian Privacy</li>
          <li>Do not sell my Data</li>
          <li>Children's online Privacy Policy</li>
          <li>Closed captioning</li>
          <li>Supported Devices</li>
          <li>Help </li>
          <li>Gift Disney+</li>
          <li>About us</li>
        </Nav>
        <Copyright>
          <p>&copy; 2023 Disney and its related entities. All Rights Reserved. Disney+ is a registered trademark of Disney Enterprises, Inc.</p>
        </Copyright>
      </Container>
    </Section>
  );
}

const Section = styled.section`
padding: 2rem 0;
margin-bottom: 0;
@media screen and (max-width:550px) {
  padding: 1rem 0;

}

`;

const Container = styled.div`
width: 95%;

margin: 0 auto;

`;

const FooterBrand = styled.div`


text-align:center;
img{
  width: 10rem;
  height: auto;
  object-fit: fill;
  @media screen and (max-width:550px) {
    width: 7rem;

  }

}
`;

const Nav = styled.nav`
display: flex;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
flex-shrink: initial;
justify-content: center;
flex-grow: 0;
li{
list-style: none;
padding-left:10px;


}
p{
    padding: 0.5rem;
    font-size: 0.9rem;
    margin-left: .3rem;
    @media screen and (max-width:550px) {
      width: .75rem;
      padding: 0.1rem;

    }
}
`;

const Copyright =styled.div`

text-align: center;
p{
  margin-top: 1vh;
  font-weight: 400 !important;
  @media screen and (max-width: 550px) {
    font-size:0.95rem;
    
  }
}


`;

export default Footer;
