import React,{useEffect, useState} from 'react'
import {NavLink,useNavigate} from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import './../App.css'

import styled from 'styled-components'
import logo1 from './../images/logo-disneyplus.svg'
import home from './../images/home-icon.svg'
import search from './../images/search-icon.svg'
import user from './../images/user.png'

import movies from './../images/movie-icon.svg'
import series from './../images/series-icon.svg'
import watch from './../images/watchlist-icon.svg'
import signoutt from './../images/power.png'
import { selectUserName, selectUserPhoto, setLoginState, setLogoutState } from './Redux/Reducers/UserReducer';
import { auth,provider } from './Firebase';

function NavBar() {
    const dispatch =useDispatch();
    const history =useNavigate();
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);
    const [state ,setState]=useState(false);
    const isTogglerOpen =()=> setState(!state);
    useEffect(()=>{

        auth.onAuthStateChanged(async(user)=>{
            if(user){
                dispatch(setLoginState({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
                    

                }));
                // history("/home");
            }
        } )


    },[dispatch,history])
    const  signin =()=>{

        auth.signInWithPopup(provider).then((response)=>{
            let user=response.user;
            dispatch(setLoginState({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
        }));
        history("/home"); //go Homepage

        })
    }

    const signout=()=>{

        auth.signOut().then(()=>{
                
                dispatch(setLogoutState());
                history("/") // go login Page



        })
        


    }



  return (
    <>
    

    <Nav>
        <Navbrand>
            <NavLink to="/"> <img src={logo1} alt="Disneylogo" /></NavLink>
            </Navbrand> 
            {

                !userName ? (
                <LoginButton onClick={signin}>Login</LoginButton>

                ):
                <>
            <Menulinks>
                <li><NavLink  className="nav-link" to="/home"> 
                <img src={home} alt="Home Icon"  /> <span>Home</span> </NavLink></li>

                <li><NavLink  className="nav-link" to=""> 
                <img src={search} alt="search Icon"   /> <span>Search</span> </NavLink></li>

                <li><NavLink  className="nav-link" to=""> 
                <img src={watch} alt="watchlist Icon"   /> <span>Watchlist</span> </NavLink></li>

                <li><NavLink  className="nav-link" to="/series"> 
                <img src={series} alt="series Icon"   /> <span>Series</span> </NavLink></li>

                <li><NavLink  className="nav-link" to="/movies"> 
                <img src={movies} alt="movies Icon"   /> <span>Movies</span> </NavLink></li>
            </Menulinks>

                <UserAuth onClick={isTogglerOpen}>
                    <img src={userPhoto} style={{borderRadius:"50%"}} alt="Admin" />
                </UserAuth>
                
                <PopupMenu activeState={state}>

                <li><NavLink  className="nav-link" to="/home"> 
                <img src={home} alt="series Icon"   /> <span>Home</span> </NavLink></li>

                <li><NavLink  className="nav-link" to="/" onClick={signout}> 
                <img src={signoutt} alt="movies Icon"   /> <span>Sign out</span> </NavLink></li>               
                </PopupMenu>
                            
                
                
                </>
                

            }

        
    </Nav>

    </>

  )
}
const LoginButton=styled.button`
color: white;
font-size: 1rem;
cursor: pointer;
padding: 5px 16px;
border-radius: 4px;
letter-spacing: 1.5px;
text-transform: uppercase;
border: 1px solid #f9f9f9;
transition: all 0.2s ease 0s;
background-color: rgba(0,0,0,0.6);
@media screen and (min-width: 200px) and (max-width:550px) {
    font-size: 0%.8rem;
    padding: 4px 13px;

}
&:hover{
    background-color: #f9f9f9;
    color :#000;
    border-color: transparent;
}


`;


const Nav =styled.nav`

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between ;
min-height: 7vh;
padding: 0 2rem;



`;
const Navbrand = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 101px;
height: auto;
object-position: center;
    img{
        width: 100%;
        height: auto;
        object-fit: fill;
    }



`;


const Menulinks = styled.div`

display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
flex-shrink: 0;
flex-wrap: row wrap;
margin-right: auto;
margin-left: 3rem;

li{
    text-decoration: none;
    list-style: none;
    margin-left: 1rem;
    .nav-link{
       
        
       position: relative;
        
        img{
        width: 1.3rem;
        height: 0.9rem;
        object-fit: cover;
        }

        span{
            font-size: 1.3rem;
            font-weight: 300;
            letter-spacing: 1px;
            line-height: 1.08;
            color:white;    
            padding-top:10px;       
            position: relative;
            &::before{
                position: absolute;
                content: "";
                top: 1;
                left: 0;
                right: 0;
                bottom: 0;
                height: 2.5px;
                background-color: #f9f9f9;
                width: 0%;
                transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
                

            }
        }
    }
    &:hover{
        span::before{
            width: 100%;
        }

    }


}



`;

const UserAuth = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  top: 0;
  right:0;
  padding-right: 10px;
  padding-top: 7px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
// https://cssreference.io/property/align-content/

const PopupMenu =styled.div`
padding: 0.5rem 0.5rem;
background-color: #040714;
border-radius: 0.345rem;
border: 1.3px solid rgb(151,151,151,1);
z-index: 6000;
box-shadow: rgb(0 0 0/50%) 0px 0px 18px 0px ;
position: absolute;
top: 7vh;
right: 2.5rem;
display: ${event => event.activeState? "flex":"none"};
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
li{
    width: 95%;
    display: flex;
    align-items: flex-start;
    border-bottom: solid white 1px ;
    margin-bottom: 10px;
    text-decoration: none;
    list-style: none;
    margin-left: 0.5rem;
    .nav-link{
       
        
       position: relative;
        
        img{
        width: 1.3rem;
        height: 0.9rem;
        object-fit: cover;
        }

        span{
            font-size: 1.3rem;
            font-weight: 300;
            letter-spacing: 1px;
            line-height: 1.08;
            color:white;    
            padding-top:10px;       
            position: relative;
           
        }
    }
   


}


`;

export default NavBar