import { IBase } from "./base";

export interface ISection extends IBase {
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}
