import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";
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
  const [totalItems, setTotalItems] = useState(0);

  function handleDecrementItems() {
    if (totalItems <= 0) {
      setTotalItems(0);
    } else {
      setTotalItems((counter) => counter - 1);
    }
  }

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
          <div>
            <button onClick={handleDecrementItems}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{totalItems}</span>
            <button onClick={() => setTotalItems((counter) => counter + 1)}>
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <ShoppingCartButton>
            <ShoppingCartSimple weight="fill" size={22} />
          </ShoppingCartButton>
        </CartButton>
      </CartContainer>
    </CardContainer>
  );
}
