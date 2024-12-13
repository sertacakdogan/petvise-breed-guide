import { Breed } from '@/components/BreedCard';

export const smallMammalBreeds: Breed[] = [
  {
    id: 'holland-lop',
    name: 'Holland Lop',
    species: 'small-mammals',
    subCategory: 'rabbits',
    description: 'Adorable rabbits with floppy ears and sweet temperaments',
    traits: ['Gentle', 'Social', 'Active'],
    imageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80',
    popularity: 1
  },
];

export const smallMammalSubCategories = [
  { id: 'rabbits', label: 'Rabbits' },
  { id: 'hamsters', label: 'Hamsters' },
  { id: 'guinea-pigs', label: 'Guinea Pigs' },
  { id: 'gerbils', label: 'Gerbils' },
  { id: 'ferrets', label: 'Ferrets' },
];
