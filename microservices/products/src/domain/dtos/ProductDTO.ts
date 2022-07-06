export interface CreateProductRequestDTO {
  thumbnail: string;
  name: string;
  price: number;
  ingredients: string;
  availability: boolean;
  volume: string;
  others?: string;
}
