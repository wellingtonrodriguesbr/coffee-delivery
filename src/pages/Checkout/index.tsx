import {
  CheckoutContainer,
  CoffeesSelectedContainer,
  DeliveryFormContainer,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <DeliveryFormContainer>
        <h3>Complete seu pedido</h3>
      </DeliveryFormContainer>

      <CoffeesSelectedContainer>
        <h3>Cafés selecionados</h3>
      </CoffeesSelectedContainer>
    </CheckoutContainer>
  );
}
