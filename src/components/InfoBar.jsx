import React from "react";
import styled from "styled-components";

const Bar = styled.footer`
  width: 100%;
  padding: 18px 10px 14px 10px;
  background: linear-gradient(90deg, #e0e7ff 0%, #f3f4f8 100%);
  box-shadow: 0 -2px 16px rgba(60,60,120,0.07);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  font-size: 1.05rem;
  color: #2a2a5a;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  margin-top: 32px;
`;

const Link = styled.a`
  color: #646cff;
  margin-left: 8px;
  text-decoration: underline;
  &:hover {
    color: #535bf2;
  }
`;

export default function InfoBar() {
  return (
    <Bar>
      Powered by <Link href="https://thecatapi.com/" target="_blank" rel="noopener noreferrer">TheCatAPI</Link>
      <span style={{margin: "0 10px"}}>|</span>
      <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">Исходный код</Link>
    </Bar>
  );
}