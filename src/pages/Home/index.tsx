import {
  Cart,
  CartItem,
  CoffeeActions,
  CoffeeCard,
  CoffeeDescription,
  CoffeeItem,
  CoffeeList,
  CoffeePrice,
  CoffeeTag,
  CoffeeTitle,
  CoffeeValue,
  Counter,
  Currency,
  HomeContainer,
  InfoContent,
  InfoImg,
  InfoItem,
  InfoItems,
  OursCoffee,
  PackageItem,
  Price,
  TimerItem,
} from "./styles";
import Expresso from "../../assets/Type=Expresso.png";
import CoffeImg from "../../assets/CoffeImg.png";
import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from "phosphor-react";

export function Home() {
  return (
    <HomeContainer>
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
          src={CoffeImg}
          alt="Copo de Café fechado com grãos de café ao redor"
        />
      </InfoContent>
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
    </HomeContainer>
  );
}
