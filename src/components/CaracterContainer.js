import React from 'react'
import styled from 'styled-components';
import Character from './Character';

export default function CaracterContainer(props) {
    const {characters, reqApi } = props;
  return (
    <>
    <ContainerCaracters>
        {characters.map((character, index) => 
             <Character dataCharacter={character} index={index}/>
         )}
           
    
      </ContainerCaracters>
        <ContainerButton>
            <ButtonRecarga onClick={reqApi}>Recargar personajes</ButtonRecarga>
        </ContainerButton>
      
      </>
  )
}

const ContainerCaracters =styled.div`
display:flex;
`;

const ContainerButton = styled.div`
    width: 100%;
    text-align:center;
`;

const ButtonRecarga = styled.button`
    width: 150px;
    color: #ffff11;
    background-color: #e76f51;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 18px;
    margin-top: 40px;
    transition: all 0.2s ease-out;

    &:hover {
        cursor: pointer;
        background-color: #1c0950;
    }
`;