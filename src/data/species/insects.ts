import { Breed } from '@/components/BreedCard';

export const insectBreeds: Breed[] = [
  {
    id: 'chilean-rose-tarantula',
    name: 'Chilean Rose Tarantula',
    species: 'insects',
    subCategory: 'spiders',
    description: 'Calm and hardy tarantulas perfect for beginners in the hobby',
    traits: ['Docile', 'Low-maintenance', 'Long-lived'],
    imageUrl: 'https://images.unsplash.com/photo-1590691566903-692bf5ca6e45?auto=format&fit=crop&q=80',
    popularity: 1
  },
];

export const insectSubCategories = [
  { id: 'spiders', label: 'Spiders' },
  { id: 'mantids', label: 'Mantids' },
  { id: 'beetles', label: 'Beetles' },
  { id: 'stick-insects', label: 'Stick Insects' },
];
