import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { priceFormatter } from "../../utils/formatter";
import {
  Cart,
  CoffeeActions,
  CoffeeDescription,
  CoffeePrice,
  CoffeeTag,
  CoffeeTitle,
  CoffeeValue,
  Container,
  Counter,
  Currency,
  Price,
} from "./styles";

type Props = {
  item: {
    id: number;
    img: string;
    title: string;
    description: string;
    price: number;
  };
};

export function Card({ item }: Props) {
  const [quantity, setQuantity] = useState(1);

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  return (
    <Container>
      <img src={item.img} alt={item.title} />
      <CoffeeTag>Tradicional</CoffeeTag>
      <CoffeeTitle>{item.title}</CoffeeTitle>
      <CoffeeDescription>{item.description}</CoffeeDescription>
      <CoffeePrice>
        <CoffeeValue>
          <Currency>R$</Currency>
          <Price>{priceFormatter.format(item.price)}</Price>
        </CoffeeValue>
        <CoffeeActions>
          <Counter>
            <button onClick={() => handleDecreaseQuantity()}>
              <Minus size={16} weight="bold" color="#8047F8" />
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleIncreaseQuantity()}>
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
    </Container>
  );
}
