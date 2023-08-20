import { styled } from "styled-components";

export const HomeContainer = styled.div`
  
`

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

export const CoffeeTag = styled.div`
  color: ${(props) => props.theme["yellow-dark"]};
  background-color: ${(props) => props.theme["yellow-light"]};
  margin-top: 0.5rem;
  padding: .25rem .5rem;
  border-radius: 100px;
`

export const CoffeeTitle = styled.h3`
  color: ${(props)=> props.theme["base-subtitle"]};
  font-family: "Baloo 2";
  font-size: 1.25rem;
  line-height: 130%;
  margin-top: 1rem;
`

export const CoffeeDescription = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(propos) => propos.theme["base-label"]};
  text-align: center;
  margin-top: 0.5rem;
`

export const CoffeePrice = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 14rem;
`

export const CoffeeValue = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: baseline;
`

export const Currency = styled.div`
  color: ${(props) => props.theme["base-text"]};
  font-size: .875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`

export const Price = styled.div`
  color: ${(props) => props.theme["base-text"]};
  font-family: "Baloo 2";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
`

export const CoffeeActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  height: 2.375rem;
  padding: 0.5rem;
  gap: 0.25rem;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
  padding: 0.5rem;
`