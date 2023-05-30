export interface ProductInterface {
  id: number;
  name: string;
  img: string;
  category: string;
  price: number;
}

export interface ProductInterfaceProps {
  product: ProductInterface;
}

export interface ProductCartInterface extends ProductInterface {
  quantity: number;
}

export interface ProductCartInterfaceProps {
  product: ProductCartInterface;
}
