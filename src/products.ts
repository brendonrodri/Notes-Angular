export interface Product{
  id: number;
  name: string;
  imageSrc: string;
  price: number;
  description: string;
}
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'iPhone',
    imageSrc: 'iphone14.png',
    price: 2000,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam magni odio, ea saepe voluptas aperiam quidem neque eos soluta aspernatur consequatur, at officia labore non voluptates voluptatem quibusdam dignissimos!"
  },
  {
    id: 2,
    name: 'AirPods',
    imageSrc: 'airpods.png',
    price: 1000,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam magni odio, ea saepe voluptas aperiam quidem neque eos soluta aspernatur consequatur, at officia labore non voluptates voluptatem quibusdam dignissimos!"
  },
  {
    id: 3,
    name: 'MacBook',
    imageSrc: 'macbook.png',
    price: 4000,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam magni odio, ea saepe voluptas aperiam quidem neque eos soluta aspernatur consequatur, at officia labore non voluptates voluptatem quibusdam dignissimos!"
  },
  {
    id: 4,
    name: 'Applewatch',
    imageSrc: 'applewatch.png',
    price: 1500,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam magni odio, ea saepe voluptas aperiam quidem neque eos soluta aspernatur consequatur, at officia labore non voluptates voluptatem quibusdam dignissimos!"
  }
];
