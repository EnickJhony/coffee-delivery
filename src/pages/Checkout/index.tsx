import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  CheckOut,
  CheckouImput,
  CheckouImputs,
  CheckoutForm,
  CheckoutHeader,
  CheckoutPayment,
  PaymentButton,
  PaymentButtons,
  PaymentHeader,
  Description,
  Subtitle,
  Title,
} from "./styles";

export function Checkout() {
  return (
    <CheckOut>
      <div className="Esquerdo">
        <div>
          <Title>Complete o seu pedido</Title>
          <CheckoutForm action="">
            <CheckoutHeader>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <Subtitle>Endereço de entrega</Subtitle>
                <Description>
                  Informe o endereço onde deseja receber seu pedido
                </Description>
              </div>
            </CheckoutHeader>
            <CheckouImputs>
              <CheckouImput type="text" placeholder="CEP" className="CEP" />
              <CheckouImput type="text" placeholder="Rua" className="Rua" />
              <div className="line">
                <CheckouImput
                  type="text"
                  placeholder="Número"
                  className="Numero"
                />
                <CheckouImput
                  type="text"
                  placeholder="Complemento"
                  className="Complemento"
                />
              </div>
              <div className="line">
                <CheckouImput
                  type="text"
                  placeholder="Bairro"
                  className="Bairro"
                />
                <CheckouImput
                  type="text"
                  placeholder="Cidade"
                  className="Cidade"
                />
                <CheckouImput type="text" placeholder="UF" className="UF" />
              </div>
            </CheckouImputs>
          </CheckoutForm>
        </div>
        <CheckoutPayment>
          <PaymentHeader>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <Subtitle>Pagamento</Subtitle>
              <Description>O pagamento é feito na entrega</Description>
            </div>
          </PaymentHeader>
          <PaymentButtons>
            <PaymentButton>
              <CreditCard size={16} color="#8047F8" />
              <p>Cartão de Crédito</p>
            </PaymentButton>
            <PaymentButton>
              <Bank size={16} color="#8047F8" />
              <p>Cartão de Débito</p>
            </PaymentButton>
            <PaymentButton>
              <Money size={16} color="#8047F8" />
              <p>Dinheiro</p>
            </PaymentButton>
          </PaymentButtons>
        </CheckoutPayment>
      </div>
      <div className="Direito">
        <div>
          <Title>Cafés Selecionados</Title>
          <p>Aqui vai vir os cafés selecionados</p>
        </div>
      </div>
    </CheckOut>
  );
}
