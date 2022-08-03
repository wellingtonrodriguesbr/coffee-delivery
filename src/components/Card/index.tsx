import { CardContainer, Tags } from "./styles";

interface CardProps {
  imgUrl: string;
  tags: string[];
  title: string;
  description: string;
  price: string;
}

export function Card({ imgUrl, tags, title, description, price }: CardProps) {
  return (
    <CardContainer>
      <img src={imgUrl} alt={title} />
      <Tags>
        {tags.map((tag) => (
          <p>{tag}</p>
        ))}
      </Tags>

      <h3>{title}</h3>
      <p>{description}</p>

      <div>
        <p>
          R$ <span>{price}</span>
        </p>
        <div>
          <div>
            <button>-</button>0<button>+</button>
          </div>
          <button>carrinho</button>
        </div>
      </div>
    </CardContainer>
  );
}
