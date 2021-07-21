import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import styled from "styled-components";

const SDiv = styled.div`
  background: #fff;
  width: 224px;
  padding: 18px;
`;

const Btn = styled.button`
  margin-top: 18px;
  background: #fff;
  border: none;
  color: #7e8198;
  &:focus {
    outline: none;
  }
`;

const Card = () => {
  return (
    <SDiv>
      <h6 style={{ textAlign: "center", marginBottom: "24px" }}>
        Expert Machine Shop
      </h6>
      <div
        className="row"
        style={{
          background: "#FCE0E3",
          padding: "16px 8px",
          margin: "0",
          borderRadius: "5px"
        }}
      >
        <div className="col-2">
          <i className="fas fa-lightbulb" style={{ color: "#EFA739" }}></i>
        </div>
        <div className="col-8">
          <p style={{ fontWeight: "500", fontSize: "14px", color: "#EFA739" }}>
            What's New
          </p>
        </div>
        <div className="col-2">
          <a href="/">
            <i
              class="fas fa-external-link-alt"
              style={{ color: "#EFA739" }}
            ></i>
          </a>
        </div>
        <div className="col-12">
          <p style={{ fontSize: "12px", marginBottom: "0" }}>
            Discover What's new on Vendosmart
          </p>
        </div>
      </div>
      <Btn>User Settings</Btn>
      <Btn>Logout</Btn>
    </SDiv>
  );
};

const Account = () => {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <Tippy
      content={<Card />}
      interactive={true}
      visible={visible}
      onClickOutside={hide}
      offset={[-100, 30]}
      theme={"light"}
    >
      <button onClick={visible ? hide : show} className="nav-item">
        <i className="fas fa-2x fa-user-circle" style={{ color: "#000" }}></i>
      </button>
    </Tippy>
  );
};

export default Account;
