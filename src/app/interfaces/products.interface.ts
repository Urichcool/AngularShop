export interface IProduct {
  id?: number;
  title: string;
  price: number;
  image?: string;
  year: number;
  configure: IProductsConfig;
}

export interface IProductsConfig{
    chip: string;
    SSD: string;
    memory: string;
    display: string;
}
