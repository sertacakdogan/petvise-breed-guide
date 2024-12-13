import { Breed } from '@/components/BreedCard';

export const farmBreeds: Breed[] = [
  {
    id: 'miniature-horse',
    name: 'Miniature Horse',
    species: 'farm',
    subCategory: 'horses',
     description: 'Gentle and intelligent, these small horses are known for their social nature and make great companions.',
    traits: ['Gentle', 'Intelligent', 'Social'],
    imageUrl: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80',
    popularity: 1
  },
  {
    id: 'jersey-cow',
    name: 'Jersey Cow',
     species: 'farm',
    subCategory: 'cattle',
    description: 'Known for their high milk production and gentle nature, Jersey cows are a popular dairy breed.',
    traits: ['Docile', 'Efficient', 'Productive'],
    imageUrl: 'https://images.unsplash.com/photo-1628109005086-91dfd7f47b22?auto=format&fit=crop&q=80',
    popularity: 2
  },
  {
    id: 'angora-goat',
    name: 'Angora Goat',
    species: 'farm',
    subCategory: 'goats',
     description: 'These goats are famous for their long, luxurious mohair fleece, and are known for their calm temperament.',
    traits: ['Calm', 'Fleece-Producing', 'Unique'],
     imageUrl: 'https://images.unsplash.com/photo-1616493897316-9e3a8161e1e1?auto=format&fit=crop&q=80',
    popularity: 3
  },
    {
    id: 'pekin-duck',
    name: 'Pekin Duck',
    species: 'farm',
    subCategory: 'poultry',
     description: 'A popular domestic duck breed, known for their white feathers, large size, and ability to lay many eggs.',
    traits: ['Hardy', 'Prolific', 'Calm'],
    imageUrl: 'https://images.unsplash.com/photo-1624965142346-112ad25d8854?auto=format&fit=crop&q=80',
      popularity: 4
  }
];

export const farmSubCategories = [
  { id: 'horses', label: 'Horses' },
  { id: 'goats', label: 'Goats' },
  { id: 'sheep', label: 'Sheep' },
  { id: 'pigs', label: 'Pigs' },
  { id: 'chickens', label: 'Chickens' },
];
