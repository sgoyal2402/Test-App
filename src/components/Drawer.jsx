import Tippy from "@tippyjs/react";
import React, { useState } from "react";
import styled from "styled-components";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

const OutDiv = styled.div`
  height: 100vh;
  width: 254px;

  display: flex;
  position: relative;
  flex-direction: column;
`;

const Logo = styled.div`
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 28px;
  width: 250px;
  height: 70px;
`;

const DriveItem = styled.button`
  margin: 0 10px;
  width: 92%;
  margin-bottom: 6px;
  height: 42px;
  background: #fff;
  &:focus {
    outline: none;
  }
  border: none;
  text-align: left;
  color: #999bad;
  font-weight: 500;
`;

const ProfileStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #c2dded;
  width: 100%;
  height: 80px;
  padding: 12px;
  margin-top: auto;
  cursor: pointer;
`;

const ListItem = styled.li`
  counter-increment: item;
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;

  &:before {
    margin-right: 16px;
    content: counter(item);
    background: #fff;
    border-radius: 100%;
    border: 1px solid black;
    color: black;
    width: 1.6em;
    text-align: center;
    display: inline-block;
  }
`;

const Card = () => {
  return (
    <div style={{ padding: "16px", margin: "0" }}>
      <h6>Hi,</h6>
      <h6>Expert Machine Shop</h6>
      <p>Here are the small things you can do to make ypur profile rock</p>
      <ol style={{ listStyle: "none", counterReset: "item", padding: "0" }}>
        <ListItem style={{ textDecoration: "line-through" }}>
          Complete Your Profile
        </ListItem>
        <ListItem>Add a Service/Package</ListItem>
        <ListItem>Add a Porfolio</ListItem>
        <ListItem>Share your Profile</ListItem>
      </ol>
    </div>
  );
};

export default function Drawer() {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <div>
      <OutDiv>
        <Logo>VendoSmart</Logo>
        <DriveItem className="active">Expert Machine Shop</DriveItem>
        <DriveItem>Dashboard</DriveItem>
        <DriveItem>Projects</DriveItem>
        <DriveItem>RFQs</DriveItem>
        <DriveItem>Purchases</DriveItem>
        <DriveItem>Awards</DriveItem>
        <DriveItem>My Suppliers</DriveItem>
        <DriveItem>Team</DriveItem>
        <DriveItem>My Messages</DriveItem>
        <Tippy
          content={<Card />}
          placement="right"
          interactive={true}
          visible={visible}
          onClickOutside={hide}
          offset={[-120, 20]}
          theme={"light"}
        >
          <ProfileStatus onClick={visible ? hide : show}>
            <span>1/4 completed</span>
            <span>Add your profile</span>
          </ProfileStatus>
        </Tippy>
      </OutDiv>
    </div>
  );
}
