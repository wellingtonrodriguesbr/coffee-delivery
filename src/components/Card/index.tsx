import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";
import { IncrementDecrementButton } from "../IncrementDecrementButton";
import {
  CardContainer,
  CartButton,
  CartContainer,
  ShoppingCartButton,
  Tags,
} from "./styles";

interface CardProps {
  coffee: {
    id: number;
    image_url: string;
    tags: string[];
    title: string;
    description: string;
    price: string;
  };
}

export function Card({ coffee }: CardProps) {
  const { image_url, title, tags, description, price } = coffee;

  return (
    <CardContainer>
      <img src={image_url} alt={title} />
      <Tags>
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </Tags>

      <h3>{title}</h3>
      <p>{description}</p>

      <CartContainer>
        <p>
          R$ <span>{price}</span>
        </p>
        <CartButton>
          <IncrementDecrementButton height="auto" />
          <ShoppingCartButton>
            <ShoppingCartSimple weight="fill" size={22} />
          </ShoppingCartButton>
        </CartButton>
      </CartContainer>
    </CardContainer>
  );
}
