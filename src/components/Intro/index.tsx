import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import {
  CartItem,
  CoffeeItem,
  Container,
  InfoContent,
  InfoImg,
  InfoItem,
  InfoItems,
  PackageItem,
  TimerItem,
} from "./styles";
import coffeeImg from "../../assets/CoffeImg.png";

export function Intro() {
  return (
    <Container>
      <InfoContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </span>
          <InfoItems>
            <InfoItem>
              <CartItem>
                <ShoppingCart size={16} weight="fill" />
              </CartItem>
              <p>Compra simples e segura</p>
            </InfoItem>
            <InfoItem>
              <PackageItem>
                <Package size={16} weight="fill" />
              </PackageItem>
              <p>Embalagem mantem o café intacto</p>
            </InfoItem>
            <InfoItem>
              <TimerItem>
                <Timer size={16} weight="fill" />
              </TimerItem>
              <p>Entrega rápida e rastreada</p>
            </InfoItem>
            <InfoItem>
              <CoffeeItem>
                <Coffee size={16} weight="fill" />
              </CoffeeItem>
              <p>O café chega fresquinho até você</p>
            </InfoItem>
          </InfoItems>
        </div>

        <InfoImg
          src={coffeeImg}
          alt="Copo de Café fechado com grãos de café ao redor"
        />
      </InfoContent>
    </Container>
  );
}
