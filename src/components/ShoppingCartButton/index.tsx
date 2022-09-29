import { ReactNode } from "react";
import { ButtonCart } from "./styles";

interface ShoppingCartButtonProps {
  background: "purple-dark" | "yellow-light";
  color: "white" | "yellow-dark";
  icon: ReactNode;
}

export function ShoppingCartButton({
  background,
  color,
  icon,
}: ShoppingCartButtonProps) {
  return (
    <ButtonCart background={background} color={color}>
      {icon}
    </ButtonCart>
  );
}
