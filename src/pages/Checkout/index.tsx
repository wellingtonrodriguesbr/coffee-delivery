import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutFormContainer,
  CoffeesSelected,
  Container,
  ItemsSelected,
  Summary,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutFormContainer>
        <h3>Complete seu pedido</h3>
        <CheckoutForm></CheckoutForm>
      </CheckoutFormContainer>
      <CoffeesSelected>
        <h3>Cafés selecionados</h3>
        <Container>
          <ItemsSelected></ItemsSelected>
          <Summary>
            <div>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <h4>Total</h4>
              <h4>R$ 33,20</h4>
            </div>
            <button>Confirmar pedido</button>
          </Summary>
        </Container>
      </CoffeesSelected>
    </CheckoutContainer>
  );
}
