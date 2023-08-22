import { styled } from "styled-components";

export const InfoContent = styled.div`
  width: 100%;
  max-width: 77rem;
  margin: 5.75rem auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-style: normal;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    display: block;
    margin-top: 1rem;
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`

export const InfoItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    line-height: 130%;
  }
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["base-text"]};
  margin-bottom: 1rem;
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.background};
  border-radius: 50%;
  padding: 0.5rem;
  background: ${(props) => props.theme["yellow-dark"]};
`

export const PackageItem = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.background};
  border-radius: 50%;
  padding: 0.5rem;
  background: ${(props) => props.theme["base-text"]};
`

export const TimerItem = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.background};
  border-radius: 50%;
  padding: 0.5rem;
  background: ${(props) => props.theme.yellow};
`

export const CoffeeItem = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.background};
  border-radius: 50%;
  padding: 0.5rem;
  background: ${(props) => props.theme["purple-dark"]};
`

export const InfoImg = styled.img`
  position: relative;
  left: 5rem;
`