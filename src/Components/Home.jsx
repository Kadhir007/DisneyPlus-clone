import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import the useDispatch hook
import { setDisneyMovies } from "./Redux/Reducers/MovieReducer";
import bghome from "./../images/home-background.png";
import HomeBanner from "./Home/HomeBanner";
import styled from "styled-components";
import Brands from "./Home/Brands";
import Originals from "./Home/Originals";
import dbConfig from "./Firebase";

function Homee() {
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  let popular = [];
  let hollywood = [];
  let newTos = [];
  let kidsTV = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    dbConfig.collection("Movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "popular":
            popular = [...popular, { id: doc.id, ...doc.data() }];
            break;
          case "hollywood":
            hollywood = [...hollywood, { id: doc.id, ...doc.data() }];
            break;
          case "newTo":
            newTos = [...newTos, { id: doc.id, ...doc.data() }];
            break;
          case "kidsTv":
            kidsTV = [...kidsTV, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });

      dispatch(
        setDisneyMovies({
          popular: popular,
          hollywood: hollywood,
          newTo: newTos,
          kidsTV: kidsTV,
          original: originals,
          trending: trending,
        })
      );
    });
  }, []);

  return (
    <NavLink to="/home">
      <Container>
        <HomeBanner />
        <Brands />
        <Originals />
      </Container>
    </NavLink>
  );
}

const Container = styled.main`
  position: relative;
  
  min-height: calc(100vh - 20px) !important;
  padding: 0 calc(3.5vw + 5px);
  display: block;
  overflow-x: hidden;
  background: url(${bghome}) center/cover no-repeat;
`;

export default Homee;
