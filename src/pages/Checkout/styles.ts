import { styled } from "styled-components"

export const CheckOut = styled.main`
  max-width: 77rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  
  .Esquerdo {
    width: 640px;
    display: flex;
    flex-direction: column;
    gap: .75rem;
  }

  .Direito {
    width: 448px
  }
`

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`

export const CheckoutHeader = styled.div`
  display: flex;
  align-items: stretch;
  gap: .5rem;
`

export const Title = styled.h3`
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  line-height: 130%;
  margin-bottom: .9rem;
`

export const Subtitle = styled.p`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1rem;
  line-height: 130%;
`

export const Description = styled.p`
  color: ${(props) => props.theme["base-text"]};
  font-size: .875rem;
  line-height: 130%;
`

export const CheckouImputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  .line {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 2.6rem;
  }

  .CEP,
  .Numero,
  .Bairro {
    width: 100%;
    max-width: 14rem;
  }

  .UF {
    width: 100%;
    max-width: 3.75rem;
  }
`

export const CheckouImput = styled.input`
  width: 100%;
  height: 2.6rem;
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};
  padding: 0 .75rem;
`

export const CheckoutPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  gap: 2rem;
`

export const PaymentHeader = styled.div`
  display: flex;
  align-items: stretch;
  gap: .5rem;
`

export const PaymentButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .75rem;
  align-self: stretch; 
`

export const PaymentButton = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  border: none;
  border-radius: 6px;
  background-color: ${(props => props.theme["base-button"])};
  cursor: pointer;

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: .75rem;
    line-height: 160%;
    text-transform: uppercase;
  }
`

export const CoffeeCartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  .line {
    background-color: ${(props) => props.theme["base-button"]};
    width: 100%;
    height: 1px;
  }
`

export const CoffeeCart = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 4px;
  align-items: stretch;
  justify-content: space-between;

  .info{
    display: flex;
    flex-direction: row;
    gap: 1.25rem;

    img {
      width: 4rem;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .action {
    display: flex;
    flex-direction: row;
    gap: .5rem;

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .25rem;
      width: 100%;
      padding: 0 .5rem;
      background: ${(props) => props.theme["base-button"]};
      border-radius: 6px;
      border: none;
      cursor: pointer;
    }
  }
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

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  .totalAll,
  .totalItems,
  .entrega {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .totalAll {
    font-size: 1.25rem;
  }
`

export const ConfirmOrder = styled.button`
  width: 100%;
  padding: .75rem;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  text-transform: uppercase;
  transition: .2s;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`