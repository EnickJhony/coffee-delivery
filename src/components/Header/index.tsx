import { ShoppingCart, MapPin } from "phosphor-react";
import Logo from "../../assets/Logo.svg";
import {
  ContainerHeader,
  HeaderContent,
  NavCart,
  NavHeader,
  NavLocation,
} from "./styles";

export function Header() {
  return (
    <ContainerHeader>
      <HeaderContent>
        <a href="/">
          <img src={Logo} alt="" />
        </a>
        <NavHeader>
          <NavLocation>
            <MapPin size={22} weight="fill" />
            <span>Manaus, AM</span>
          </NavLocation>
          <NavCart href="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavCart>
        </NavHeader>
      </HeaderContent>
    </ContainerHeader>
  );
}
