import {
  ButtonAddress,
  ButtonCart,
  HeaderContainer,
  ShoppingCar,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <ShoppingCar>
        <ButtonAddress>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </ButtonAddress>
        <ButtonCart>
          <ShoppingCart weight="fill" size={22} />
        </ButtonCart>
      </ShoppingCar>
    </HeaderContainer>
  );
}
