import React, { useState } from "react";
import styled from "styled-components";
import "./SideNav.css";
import {
  FaUser,
} from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillTagsFill } from "react-icons/bs";
import { AiTwotoneSetting ,AiOutlineCalendar} from "react-icons/ai";
import SubMenu from "./SubMenu";

const SidebarNav = styled.nav`
  background-color: #4285F4;
  color:white;
  width: 250px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SideNav = ({ xyz }) => {
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <BiSolidDashboard />,
    },
    {
      name: "Users",          
      path: "/users",
      icon: <FaUser />,
    },
    {
      path: "/transactions",
      name: "Transactions",
      icon: <BsFillTagsFill />,
    },
    {
      path: "/schedules",
      name: "Schedules",
      icon: <AiOutlineCalendar />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <AiTwotoneSetting />,
    },
  ];
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <SidebarNav sidebar={sidebar}>
        <div className="top_section">
          <h1 className="logo">Board.</h1>
        </div>

        <SidebarWrap>
          {menuItem.map((item, index) => {
            return <SubMenu item={item} key={index}  />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default SideNav;
