import React from 'react'
import Logo from '../images/the-simpson.png';
import styled from "styled-components";

export default function Welcome(props) {
    const { reqApi } = props;
  return (
    <div>
        <ContentLogo>
          <WelcomeText>Bienvenido, para poder utilizar las frases pincha sobre la imagen</WelcomeText>
          <ImageLogo src={Logo} alt="Logo Simpson" onClick={reqApi}/>
        </ContentLogo>        

    </div>
  )
}
const ImageLogo = styled.img`
  width: 450px;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;

const WelcomeText = styled.p`
  color: #8a3a3a;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`;
