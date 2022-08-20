import {
  DeliveryDetails,
  DeliveryDetailsContainer,
  SuccessContainer,
  SuccessMessage,
} from "./styles";
import motoBoyImage from "../../assets/SuccessImage.png";
import locationImage from "../../assets/icons/map.svg";
import timeImage from "../../assets/icons/time.svg";
import moneyImage from "../../assets/icons/money.svg";

export function Success() {
  return (
    <SuccessContainer>
      <SuccessMessage>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <DeliveryDetails>
          <DeliveryDetailsContainer>
            <img src={locationImage} alt="" />
            <p>
              Entrega em <b>Rua João Daniel Martinelli, 102</b>
              <p>Farrapos - Porto Alegre, RS</p>
            </p>
          </DeliveryDetailsContainer>

          <DeliveryDetailsContainer>
            <img src={timeImage} alt="" />
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </DeliveryDetailsContainer>

          <DeliveryDetailsContainer>
            <img src={moneyImage} alt="" />
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de crédito</strong>
            </div>
          </DeliveryDetailsContainer>
        </DeliveryDetails>
      </SuccessMessage>

      <img src={motoBoyImage} alt="" />
    </SuccessContainer>
  );
}
