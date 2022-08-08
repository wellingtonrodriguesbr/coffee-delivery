import {
  ButtonAddress,
  ButtonCart,
  HeaderContainer,
  ShoppingCartContainer,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <ShoppingCartContainer>
        <ButtonAddress>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </ButtonAddress>
        <ButtonCart>
          <NavLink to="/checkout">
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </ButtonCart>
      </ShoppingCartContainer>
    </HeaderContainer>
  );
}
