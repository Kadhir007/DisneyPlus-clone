import React from 'react'
import Banner from './Banner';
import styled from 'styled-components';
import Stream from './Stream';
import Download from './Download'
import GroupWatch from './GroupWatch';
import MarvelStudios from './MarvelStudios';
import GridSystem from './GridSystem';
import Bundle from './Bundle';

function Login() {
  return (
    <>
    <Main>
      <Banner/>
      <Stream/>
      <GroupWatch/>
      <Download/>
      <MarvelStudios/>
      {/* <GridSystem/> */}
      <Bundle/>
    </Main>
    </>
  )
}
const Main =styled.main`
height:auto;
height:auto;
overflow-y:hidden;

`;

export default Login
