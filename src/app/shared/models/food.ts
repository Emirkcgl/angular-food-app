export class Food {
  id!: number;
  name!: string;
  price!: number; // Bu alan kesinlikle doldurulmalı (non-null assertion operator).
  tags?: string[]; // Opsiyonel, bu alanı doldurmak zorunda değiliz (? işareti).
  favorite: boolean = false;
  stars: number = 0;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
}
