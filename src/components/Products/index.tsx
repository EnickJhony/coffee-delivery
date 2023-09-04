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
import { useState } from "react";

export function Products() {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = (): void => {
    setQuantity((state) => state + 1);
  }

  const handleDecreaseQuantity = (): void => {
    setQuantity((state) =>  state === 1 ? state : state - 1);
  }

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
                  <button onClick={handleDecreaseQuantity}>
                    <Minus size={16} weight="bold" color="#8047F8" />
                  </button>
                  <span>{quantity}</span>
                  <button onClick={handleIncreaseQuantity}>
                    <Plus size={16} weight="bold" color="#8047F8" />
                  </button>
                </Counter>
                <Cart>
                  <button>
                    <ShoppingCart size={22} weight="fill" color="#FFF" />
                  </button>
                </Cart>
              </CoffeeActions>
            </CoffeePrice>
          </CoffeeCard>
        ))}
      </CoffeeList>
    </OursCoffee>
  );
}
