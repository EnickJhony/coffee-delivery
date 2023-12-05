import { styled } from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: ${(props) => props.theme.background};
`

export const HeaderContent = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 2rem 0;

  gap: 1rem;
`

export const NavLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme["purple-light"]};
  border-radius: 6px;
  color: ${({ theme }) => theme.purple};
  

  span {
    color: ${({ theme }) => theme["purple-dark"]};
  }
`

export const NavCart = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme["yellow-dark"]};
  background: ${({ theme }) => theme["yellow-light"]};
  border-radius: 6px;
  padding: 0.5rem;

  a {
    text-decoration: none;
  }
`