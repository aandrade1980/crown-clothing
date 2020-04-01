import { IBase } from "./base";

export interface ICollection extends IBase {
  title: string;
  routeName: string;
  items: IItem[];
}

export interface IItem extends IBase {
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}
