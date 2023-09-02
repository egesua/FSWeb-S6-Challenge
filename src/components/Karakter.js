import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import styled from "styled-components";
import Filmler from "./Filmler";

export default function Karakter(props) {
  const { id, character } = props;
  const  StyDiv  = styled.div`
    font-size: 2rem;
  `;

  return (
    <div>
      <AccordionItem>
        <AccordionHeader targetId={id}>{character.name}</AccordionHeader>
        <AccordionBody accordionId={id}>
          <StyDiv>Name: {character.name}</StyDiv>
          <StyDiv>Height: {character.height}</StyDiv>
          <StyDiv>Mass: {character.mass}</StyDiv>
          <StyDiv>Hair Color: {character.hair_color}</StyDiv>
          <StyDiv>Eye Color: {character.eye_color}</StyDiv>
          <StyDiv>Birth Year: {character.birth_year}</StyDiv>
          <StyDiv>Gender: {character.gender}</StyDiv>
          {character.films.map((item) => {
            return <Filmler name = {item} />
          })}
        </AccordionBody>
      </AccordionItem>
    </div>
  );
}
