import React from "react";
import styled from "styled-components";

const Drawer = ({ children, isOpen }) => (
  <Aside isOpen={isOpen}>{children}</Aside>
);

export default Drawer;

const Aside = styled.aside`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  border-left: 1px solid #e6e6e6;
  padding: 2.5em 1em;
  z-index: 2;
  max-width: 75vw;
  transform: ${props => (props.isOpen ? `translateX(0%)` : `translateX(100%)`)};
  transition: transform 250ms ease-in-out;
  box-shadow: -4px -8px 10px 0px rgba(0, 0, 0, 0.08);
`;
