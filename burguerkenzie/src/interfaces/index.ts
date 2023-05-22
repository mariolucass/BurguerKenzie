import { ReactNode } from "react";

export interface Children {
  children: ReactNode;
}

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
