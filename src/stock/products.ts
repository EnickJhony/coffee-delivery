import Expresso from "../assets/coffee/Expresso.png";
import Americano from "../assets/coffee/Americano.png";
import Cremoso from "../assets/coffee/ExpressoCremoso.png";
import Gelado from "../assets/coffee/CafeGelado.png";
import CafeComLeite from "../assets/coffee/CafeLeite.png";
import Latte from "../assets/coffee/Latte.png";
import Cappucino from "../assets/coffee/Capuccino.png";
import Macchiato from "../assets/coffee/Macchiato.png";
import Mochaccino from "../assets/coffee/Mochaccino.png";
import ChocolateQuente from "../assets/coffee/ChocolateQuente.png";
import Cubano from "../assets/coffee/Cubano.png";
import Havaiano from "../assets/coffee/Havaiano.png";
import Arabe from "../assets/coffee/Arabe.png";
import Irlandes from "../assets/coffee/Irlandes.png";

export interface Coffee {
  id: number
  img: string
  title: string
  description: string
  price: number
}

export const Product: Coffee[] = [
  {
    id: 1,
    img: Expresso,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90,
  },
  {
    id: 2,
    img: Americano,
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
  },
  {
    id: 3,
    img: Cremoso,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90,
  },
  {
    id: 4,
    img: Gelado,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
  },
  {
    id: 5,
    img: CafeComLeite,
    title: "Café com leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
  },
  {
    id: 6,
    img: Latte,
    title: "Expresso Gelado",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90,
  },
  {
    id: 7,
    img: Cappucino,
    title: "Cappucino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90,
  },
  {
    id: 8,
    img: Macchiato,
    title: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
  },
  {
    id: 9,
    img: Mochaccino,
    title: "Mochaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
  },
  {
    id: 10,
    img: ChocolateQuente,
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90,
  },
  {
    id: 11,
    img: Cubano,
    title: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90,
  },
  {
    id: 12,
    img: Havaiano,
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90,
  },
  {
    id: 13,
    img: Arabe,
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90,
  },
  {
    id: 14,
    img: Irlandes,
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90,
  },
];
