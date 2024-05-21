import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';
import Margin from "./Margin"

const Photo= styled.img`
  width: 170px;
  height: 170px;
`;

const Wrapper = styled.div`
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Card({ img, name, id }) {
    const navigate = useNavigate();
  
    return (
      <Wrapper onClick={() => navigate(`/user/${id}`)}>
        <Photo src={img} alt="img"/>
        <Margin height={10}/>
        <p>{name}</p>
      </Wrapper>
    );
  }

