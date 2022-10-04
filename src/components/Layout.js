import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import {Outlet} from "react-router-dom";


function Layout(){
  
  return(
       <>
        <Wrapper>
           <Nav />
           <Outlet />
           {/* <Home /> */}

        </Wrapper>
       </>
  );
}

const Wrapper = styled.div`
  margin : 0px;
  padding : 0px;
  object-fit : cover;
`

 export default Layout;