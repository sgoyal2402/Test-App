import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import styled from "styled-components";
import Main from "./Main";
import Profile from "./Profile";

const StyledDiv = styled.div`
  position: relative;
  background: #f2f8fb;
  width: 100%;
  height: 79%;
  content: " ";
  padding: 32px;
  overflow-y: visible;
  flex: 1 1 auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
const FButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  background: #22be31;
  border-radius: 50%;
  border: none;
  position: absolute;
  bottom: 32px;
  right: 32px;
  color: white;
  &:focus {
    outline: none;
  }
`;

const Footer = styled.div`
  margin-top: auto;
  width: 100%;
  height: 80px;
  background-color: #0072b4;
  justify-content: center;
  padding: 12px;
  color: #fff;
  display: flex;
  align-items: center;
`;

const SLink = styled.a`
  text-decoration: none;
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Card = () => {
  return (
    <div style={{ background: "#fff", padding: "16px" }}>
      <SLink href="/">Create New RFQ</SLink>
      <SLink href="/">Create Bulk RFQ</SLink>
      <SLink href="/">Draft RFQs</SLink>
      <SLink href="/">Draft Bulk RFQs</SLink>
    </div>
  );
};

export default function Content() {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <>
      <StyledDiv>
        <Header>
          <Profile />
          <Main />
        </Header>
        <Tippy
          content={<Card />}
          placement="left"
          interactive={true}
          visible={visible}
          onClickOutside={hide}
          offset={[-65, 20]}
          theme={"light"}
        >
          <FButton onClick={visible ? hide : show}>
            <i className="fas fa-2x fa-plus"></i>
          </FButton>
        </Tippy>
      </StyledDiv>
      <Footer>Copyright 2021 VendoSmart. All rights reserved</Footer>
    </>
  );
}
