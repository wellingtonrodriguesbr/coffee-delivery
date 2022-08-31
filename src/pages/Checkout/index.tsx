import {
  CheckoutContainer,
  CoffeesSelectedContainer,
  DeliveryFormContainer,
  BaseContainerCheckout,
  BaseContainerDescription,
  RadioButtonsContainer,
  RadioButton,
  FormContainer,
} from "./styles";

import MapOutlined from "../../assets/icons/map-outlined.svg";
import MoneyOutlined from "../../assets/icons/money-outlined.svg";
import CardCredit from "../../assets/icons/card.svg";
import CardDebit from "../../assets/icons/card-debit.svg";
import Dollar from "../../assets/icons/dollar.svg";
import { useState } from "react";

type PaymentMethod = "credit" | "debit" | "money";

export function Checkout() {
  const [selected, setSelected] = useState<PaymentMethod>();

  return (
    <CheckoutContainer>
      <DeliveryFormContainer>
        <h3>Complete seu pedido</h3>
        <BaseContainerCheckout>
          <BaseContainerDescription>
            <img src={MapOutlined} width={22} height={22} alt="" />
            <div>
              <h4>Endereço de entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </BaseContainerDescription>
          <FormContainer>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="number" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </FormContainer>
        </BaseContainerCheckout>

        <BaseContainerCheckout>
          <BaseContainerDescription>
            <img src={MoneyOutlined} width={22} height={22} alt="" />
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </BaseContainerDescription>
          <RadioButtonsContainer>
            <RadioButton
              onClick={() => setSelected("credit")}
              selected={selected === "credit"}
            >
              <img width={20} height={20} src={CardCredit} alt="" />
              Cartão de crédito
            </RadioButton>

            <RadioButton
              onClick={() => setSelected("debit")}
              selected={selected === "debit"}
            >
              <img width={20} height={20} src={CardDebit} alt="" />
              Cartão de débito
            </RadioButton>

            <RadioButton
              onClick={() => setSelected("money")}
              selected={selected === "money"}
            >
              <img width={20} height={20} src={Dollar} alt="" />
              Dinheiro
            </RadioButton>
          </RadioButtonsContainer>
        </BaseContainerCheckout>
      </DeliveryFormContainer>

      <CoffeesSelectedContainer>
        <h3>Cafés selecionados</h3>
      </CoffeesSelectedContainer>
    </CheckoutContainer>
  );
}
