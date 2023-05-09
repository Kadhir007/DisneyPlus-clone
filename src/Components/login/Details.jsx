import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import dbConfig from "../Firebase";


import play from "./../../images/play-icon-black.png";
import trailer from "./../../images/play-icon-white.png";
import wishlist from "./../../images/watchlist-icon.svg";
import group from "./../../images/group-icon.png";




const Detail = () => {
  const { id } = useParams();
  const [State, setState] = useState();

  useEffect(() => {
    dbConfig
      .collection("Movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setState(doc.data());
        } else {
          console.log("Details cannot be fetched");
        }
      });
  }, [id]);

  return (
    <>
      {State && (
        <Background style={{background:` url(${State.BackgroundImg})`,backgroundSize:'cover'
        ,backgroundPosition:'center',backgroundRepeat:'no-repeat' }}>
          <Container>
            <Content>
              <ImageTitle>
                <img src={State.TitleImg} alt={State.id} />
              </ImageTitle>
              <h2>{State.Genres}</h2>
              <p>{State.Description}</p>
              <ButtonGroup>
                <Playbtn>
                  <img src={play} alt="Play/icon" />
                  <span>Play</span>
                </Playbtn>
                <Trailerbtn>
                  <img src={trailer} alt="Play/icon" />
                  <span>Trailer</span>
                </Trailerbtn>
                <AddtoPlaylist>
                  <img src={wishlist} alt="Play/icon" />
                </AddtoPlaylist>
                <GroupWatch>
                  <img src={group} alt="Play/icon" />
                </GroupWatch>
              </ButtonGroup>
            </Content>
          </Container>
        </Background>
      )}
    </>
  );
};


const Background = styled.main`
  
  min-height: 95vh;

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    min-height: 72vh;
  }
  @media screen and (min-width: 550px) and (max-width: 991px) {
    min-height: 65vh;
  }
  @media screen and (min-width: 280px) and (max-width: 550px) {
    min-height: 55vh;
    object-fit: fill;
  }
`;
const Container = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
  display: block;
  
  align-items: center;
`;

const ImageTitle = styled.div`
  max-width: 750px;
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: 15vh;

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    max-width: 325px;
  }

  @media screen and (min-width: 375px) and (max-width: 550px) {
    min-width: 250px;
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    min-width: 150px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 14vh;
  position: relative;

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    min-height: 72vh;
  }

  @media screen and (min-width: 375px) and (max-width: 550px) {
    min-height: 65vh;
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    min-height: 55vh;
    object-fit: fill;
  }

  h2 {
    color: #fff;
    font-size: 2.2rem;
    font-weight: 500 !important;

    @media screen and (min-width: 991px) and (max-width: 1200px) {
      font-size: 1rem;
    }

    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.75rem;
    }

    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.7rem;
      max-width: 250px;
    }
  }
  p {
    line-height: 1.4;

    font-size: 25px;
    padding: 1rem 0;
    color: #f9f9f9;
    max-width: 650px;
    width: 100%;
    font-weight: 500;

    @media screen and (min-width: 991px) and (max-width: 1200px) {
      font-size: 1rem;
      max-width: 550px;
    }

    @media screen and (min-width: 375px) and (max-width: 767px) {
      padding: 0.5rem 0;
      font-size: 0.75rem;
      max-width: 400px;
    }

    @media screen and (min-width: 280px) and (max-width: 375px) {
      padding: 0.3rem 0;
      font-size: 0.75rem;
      max-width: 400px;
      min-height: 150px;
    }
  }
`;

const ButtonGroup = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction:row;

`;
const Playbtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  outline: none;
  border: 1px solid rgba(249, 249, 249, 1);
  background: rgba(249, 249, 249, 1);
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  margin-right: 22px;
  border-radius: 5px;
  @media screen and (min-width: 550px) and (max-width: 1200px) {
    padding: 0.5rem 1rem;
  }

  @media screen and (min-width: 375px) and (max-width: 550px) {
    padding: 0.5rem 1rem;
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    border-radius: 0.145rem;
    padding: 0.4rem 0.7rem;
    margin-right: 13px;
    background: #f9f9ff;
  }

  img {
    width: 32px;
    height: auto;
    object-fit: contain;
    z-index: 1500;
    opacity: 1;
    @media screen and (min-width: 550px) and (max-width: 1200px) {
      width: 25px;
    }
    @media screen and (min-width: 280px) and (max-width: 550px) {
      width: 19px;
    }
  }
  span {
    color: #000;
    font-size: 1.2rem;
    font-weight: 400 !important;
    text-transform: uppercase;
    line-height: 1.08;
    letter-spacing: 1px;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      font-size: 1rem;
    }

    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.8rem;
    }

    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.8rem;
    }
  }
`;
const Trailerbtn = styled(Playbtn)`
  color: rgba(249, 249, 249, 1);
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(249, 249, 249, 1);
  cursor: default;
  &:hover {
    background: rgba(198, 198, 198, 1);
  }
  span {
    color: white;
    font-size: 1.2rem;
    font-weight: 400 !important;
    text-transform: uppercase;
    line-height: 1.08;
    letter-spacing: 1px;

   
  }
`;
const AddtoPlaylist = styled.button`
  height: 41px;
  width: 41px;
  display: flex;
  cursor: pointer;
  margin-right: 21px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 550px) and (max-width: 1200px) {
    height: 35px;
    width: 35px;
  }

  @media screen and (min-width: 375px) and (max-width: 550px) {
    height: 29px;
    width: 29px;
    margin-right: 13px;
  }
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0px) rotate(0 deg);
      @media screen and (min-width: 280px) and (max-width: 550px) {
        width: 15px;
      }
    }

    &:nth-child(2) {
      width: 2px;
      height: 16px;
      transform: translate(-8px) rotate(0deg);
      @media screen and (min-width: 280px) and (max-width: 550px) {
        width: 13px;
      }
    }
  }
`;

const GroupWatch = styled.button`
  height: 39px;
  width: 39px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: rgba(0,0,0,0.5);
  border: 2px solid #fff;
  @media screen and (min-width: 280px) and (max-width: 550px) {
    width: 31px;
    height: 31px;
  }
  img {
    width: 100%;

    height: auto;
    object-fit: contain;
    @media screen and (min-width: 550px) and (max-width: 1200px) {
      height: 29px;
      width: 29px;
    }

    @media screen and (min-width: 375px) and (max-width: 550px) {
      height: 23px;
      width: 23px;
    }
  }
`;

export default Detail;
