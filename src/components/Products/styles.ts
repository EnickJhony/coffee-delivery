import { styled } from "styled-components";

export const OursCoffee = styled.div`
  width: 100%;
  max-width: 77rem;
  margin: 5.75rem auto;
  padding: 0 2rem;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-style: normal;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 4rem;
`

export const CoffeeCard = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    margin-top: -2rem;
  }
`
