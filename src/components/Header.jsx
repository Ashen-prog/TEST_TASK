import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 32px 10px 24px 10px;
  background: linear-gradient(90deg, #f3f4f8 0%, #e0e7ff 100%);
  box-shadow: 0 4px 24px rgba(60,60,120,0.10);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2a2a5a;
  font-weight: 800;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(60,60,120,0.08);
  margin: 0;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>Cat Gallery</Title>
    </HeaderWrapper>
  );
}