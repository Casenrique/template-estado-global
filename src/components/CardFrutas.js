import React from "react";
import styled from "styled-components";

export default function CardFruta({ image, name, price, id, comprar }) {
  return (
    <CardContainer>
      <Image src={image} alt={name} />
      <p>{name}</p>
      <p>R${price}</p>
      <button onClick={() => comprar(id)}>Comprar</button>
    </CardContainer>
  );
}
const Image = styled.img`
  width: 80%;
`;
const CardContainer = styled.section`
  width: 150px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;
