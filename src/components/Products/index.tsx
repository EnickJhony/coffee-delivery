import { Product } from "../../stock/products";
import { Card } from "../Card";
import { CoffeeCard, CoffeeList, OursCoffee } from "./styles";

export function Products() {
  return (
    <OursCoffee>
      <h2>Nossos Cafés</h2>
      <CoffeeList>
        {Product.map((item) => (
          <CoffeeCard key={item.id}>
            <Card item={item} />
          </CoffeeCard>
        ))}
      </CoffeeList>
    </OursCoffee>
  );
}
