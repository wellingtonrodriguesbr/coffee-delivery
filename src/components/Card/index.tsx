import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { CardContainer, CartButton, CartContainer, Tags } from "./styles";

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
        {tags.map((tag) => (
          <p>{tag}</p>
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
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>0</span>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <button>
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </CartButton>
      </CartContainer>
    </CardContainer>
  );
}
