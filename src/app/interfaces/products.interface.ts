export interface IProduct {
  id: string;
  title: string;
  price: number;
  image?: string;
  year: number;
  configure: IProductsConfig;
  quantity?: number
}

export interface IProductsConfig{
    chip: string;
    SSD: string;
    memory: string;
    display: string;
}
