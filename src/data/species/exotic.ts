import { Breed } from '@/components/BreedCard';

export const exoticBreeds: Breed[] = [
  {
    id: 'sugar-glider',
    name: 'Sugar Glider',
    species: 'exotic',
    subCategory: 'marsupials',
    description: 'Nocturnal marsupials that glide through the air and bond closely with their owners',
    traits: ['Nocturnal', 'Social', 'Active'],
    imageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80',
    popularity: 1
  },
];

export const exoticSubCategories = [
  { id: 'marsupials', label: 'Marsupials' },
  { id: 'primates', label: 'Primates' },
  { id: 'hedgehogs', label: 'Hedgehogs' },
];
