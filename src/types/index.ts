export interface Breed {
  id: string;
  name: string;
  species: string;
  subCategory: string;
  description: string;
  traits: string[];
  imageUrl: string;
  popularity?: number;
}

export interface SubCategory {
  id: string;
  label: string;
}

export interface CategorySeoContent {
  title: string;
  description: string;
  content: string;
}

export interface CategoryContent {
  breeds: Breed[];
  subCategories: SubCategory[];
}
