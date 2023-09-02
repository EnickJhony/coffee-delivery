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
import { Minus, Plus, ShoppingCart } from "phosphor-react";

import { Product } from "../../stock/products";

export function Products() {
  return (
    <OursCoffee>
      <h2>Nossos Cafés</h2>
      <CoffeeList>
        {Product.map((item) => (
          <CoffeeCard key={item.id}>
            <img src={item.img} alt={item.title} />
            <CoffeeTag>Tradicional</CoffeeTag>
            <CoffeeTitle>{item.title}</CoffeeTitle>
            <CoffeeDescription>{item.description}</CoffeeDescription>
            <CoffeePrice>
              <CoffeeValue>
                <Currency>R$</Currency>
                <Price>{item.price}</Price>
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
        ))}
      </CoffeeList>
    </OursCoffee>
  );
}
