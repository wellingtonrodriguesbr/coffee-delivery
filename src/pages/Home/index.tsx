import { CoffeesList, HomeContainer, ItemsDescription } from "./styles";
import ImageHero from "../../assets/HeroImage.png";
import IconCart from "../../assets/icons/cart.svg";
import IconBox from "../../assets/icons/box.svg";
import IconTime from "../../assets/icons/time.svg";
import IconCoffee from "../../assets/icons/coffee.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const [coffesList, setCoffeesList] = useState([]);

  console.log(coffesList);

  async function getCoffeesList() {
    const { data: list } = await api.get("/data.json");
    setCoffeesList(list);
  }

  useEffect(() => {
    getCoffeesList();
  }, []);

  return (
    <>
      <HomeContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>
          <ItemsDescription>
            <div>
              <img src={IconCart} alt="" />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <img src={IconBox} alt="" />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <img src={IconTime} alt="" />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <img src={IconCoffee} alt="" />
              <span>O café chega fresquinho até você</span>
            </div>
          </ItemsDescription>
        </div>

        <img src={ImageHero} alt="" />
      </HomeContainer>
      <CoffeesList>
        <h2>Nossos cafés</h2>
      </CoffeesList>
    </>
  );
}
