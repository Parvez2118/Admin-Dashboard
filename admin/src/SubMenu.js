import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 2vh;
  list-style: none;
  height: 3.4vh;
  width: 10vw;  
  margin:1px 2vw 0;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    border-radius:15px;
    color:white;
  }
  &.active {
    cursor: pointer;
    border-radius: 15px;
    color: white;
  }
`;

const SidebarLabel = styled.span`
  margin-left: .7vw;
`;


const SubMenu = ({ item }) => {

  return (
    <>
      <SidebarLink to={item.path} >

        <div>
          {item.icon}
          <SidebarLabel>{item.name}</SidebarLabel>
        </div>


      </SidebarLink>

      
        
    </>
  );
};
export default SubMenu;