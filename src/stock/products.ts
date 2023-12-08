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
  tags: string[]
  price: number
  quantity: number
}

export const Product: Coffee[] = [
  {
    id: 0,
    img: Expresso,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
  {
    id: 1,
    img: Americano,
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
  {
    id: 2,
    img: Cremoso,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
  {
    id: 3,
    img: Gelado,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
  {
    id: 4,
    img: CafeComLeite,
    title: "Café com leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
  {
    id: 5,
    img: Latte,
    title: "Expresso Gelado",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
  {
    id: 6,
    img: Cappucino,
    title: "Cappucino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
  {
    id: 7,
    img: Macchiato,
    title: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
  {
    id: 8,
    img: Mochaccino,
    title: "Mochaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
  {
    id: 9,
    img: ChocolateQuente,
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
  {
    id: 10,
    img: Cubano,
    title: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
  {
    id: 11,
    img: Havaiano,
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
  {
    id: 12,
    img: Arabe,
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
  {
    id: 13,
    img: Irlandes,
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ['tradicional'],
    price: 9.90,
    quantity: 1,
  },
];
