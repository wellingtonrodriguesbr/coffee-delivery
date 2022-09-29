import {
  ButtonAddress,
  HeaderContainer,
  ShoppingCartContainer,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { ShoppingCartButton } from "../ShoppingCartButton";
import { ShoppingCart } from "phosphor-react";

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
        <NavLink to="/checkout">
          <ShoppingCartButton
            background="yellow-light"
            color="yellow-dark"
            icon={<ShoppingCart weight="fill" size={22} />}
          />
        </NavLink>
      </ShoppingCartContainer>
    </HeaderContainer>
  );
}
