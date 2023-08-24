import {
  Cart,
  CoffeeActions,
  CoffeeCard,
  CoffeeDescription,
  CoffeeList,
  CoffeePrice,
  CoffeeTag,
  CoffeeTitle,
  CoffeeValue,
  Counter,
  Currency,
  OursCoffee,
  Price,
} from "./styles";
import Expresso from "../../assets/coffee/Expresso.png";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function Products() {
  return (
    <OursCoffee>
      <h2>Nossos Cafés</h2>
      <CoffeeList>
        <CoffeeCard>
          <img src={Expresso} alt="Xícara de Expresso" />
          <CoffeeTag>Tradicional</CoffeeTag>
          <CoffeeTitle>Expresso tradicional</CoffeeTitle>
          <CoffeeDescription>
            O Tradicional café feito com água quente e grãos moídos
          </CoffeeDescription>
          <CoffeePrice>
            <CoffeeValue>
              <Currency>R$</Currency>
              <Price>9,90</Price>
            </CoffeeValue>
            <CoffeeActions>
              <Counter>
                <Minus size={16} weight="bold" color="#8047F8" />
                <span>1</span>
                <Plus size={16} weight="bold" color="#8047F8" />
              </Counter>
              <Cart>
                <ShoppingCart size={22} weight="fill" color="#FFF" />
              </Cart>
            </CoffeeActions>
          </CoffeePrice>
        </CoffeeCard>
      </CoffeeList>
    </OursCoffee>
  );
}
