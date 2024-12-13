import { Breed } from '@/components/BreedCard';

export const catBreeds: Breed[] = [
  {
    id: 'persian',
    name: 'Persian',
    species: 'cats',
    subCategory: 'longhair',
    description: 'Sweet-tempered cats known for their luxurious coats and peaceful personalities',
    traits: ['Gentle', 'Quiet', 'Sweet'],
    imageUrl: 'https://images.unsplash.com/photo-1617642171292-e480663e3762?auto=format&fit=crop&q=80',
    popularity: 1
  },
  {
    id: 'siamese',
    name: 'Siamese',
    species: 'cats',
    subCategory: 'shorthair',
    description: 'Vocal and social cats that form strong bonds with their human families',
    traits: ['Vocal', 'Social', 'Intelligent'],
    imageUrl: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80',
    popularity: 2
  },
  {
    id: 'maine-coon',
    name: 'Maine Coon',
    species: 'cats',
    subCategory: 'longhair',
    description: 'Gentle giants of the cat world with magnificent fur and friendly personalities',
    traits: ['Large', 'Gentle', 'Friendly'],
    imageUrl: 'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?auto=format&fit=crop&q=80',
    popularity: 3
  },
  {
    id: 'bengal',
    name: 'Bengal',
    species: 'cats',
    subCategory: 'shorthair',
    description: 'Wild-looking cats with high energy and striking spotted coats',
    traits: ['Active', 'Playful', 'Energetic'],
    imageUrl: 'https://images.unsplash.com/photo-1638867911266-aa5c8b8b0c5f?auto=format&fit=crop&q=80',
    popularity: 4
  },
  {
    id: 'ragdoll',
    name: 'Ragdoll',
    species: 'cats',
    subCategory: 'longhair',
    description: 'Large, laid-back cats that go limp when held, true to their name',
    traits: ['Relaxed', 'Affectionate', 'Gentle'],
    imageUrl: 'https://images.unsplash.com/photo-1586289883499-f11d28425e13?auto=format&fit=crop&q=80',
    popularity: 5
  },
  {
    id: 'sphynx',
    name: 'Sphynx',
    species: 'cats',
    subCategory: 'shorthair',
    description: 'Hairless cats with warm personalities and unique appearance',
    traits: ['Hairless', 'Friendly', 'Energetic'],
    imageUrl: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&q=80',
    popularity: 6
  },
  {
    id: 'british-shorthair',
    name: 'British Shorthair',
    species: 'cats',
    subCategory: 'shorthair',
    description: 'Easy-going cats with plush coats and teddy bear faces',
    traits: ['Calm', 'Patient', 'Dignified'],
    imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80',
    popularity: 7
  },
  {
    id: 'scottish-fold',
    name: 'Scottish Fold',
    species: 'cats',
    subCategory: 'shorthair',
    description: 'Distinguished by their folded ears and sweet expressions',
    traits: ['Sweet', 'Adaptable', 'Intelligent'],
    imageUrl: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&q=80',
    popularity: 8
  },
  {
    id: 'abyssinian',
    name: 'Abyssinian',
    species: 'cats',
    subCategory: 'shorthair',
    description: 'Active and curious cats with ticked coats and athletic builds',
    traits: ['Active', 'Curious', 'Playful'],
    imageUrl: 'https://images.unsplash.com/photo-1603096288844-12a0e1a2c8b3?auto=format&fit=crop&q=80',
    popularity: 9
  },
  {
    id: 'russian-blue',
    name: 'Russian Blue',
    species: 'cats',
    subCategory: 'shorthair',
    description: 'Elegant cats with plush silver-blue coats and shy but loving personalities',
    traits: ['Quiet', 'Gentle', 'Shy'],
    imageUrl: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&q=80',
    popularity: 10
  },
  {
    id: 'norwegian-forest',
    name: 'Norwegian Forest Cat',
    species: 'cats',
    subCategory: 'longhair',
    description: 'Large, hardy cats with thick double coats adapted to cold climates',
    traits: ['Strong', 'Independent', 'Friendly'],
    imageUrl: 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?auto=format&fit=crop&q=80',
    popularity: 11
  },
];

export const catSubCategories = [
  { id: 'longhair', label: 'Longhair' },
  { id: 'shorthair', label: 'Shorthair' },
  { id: 'oriental', label: 'Oriental' },
  { id: 'semi-longhair', label: 'Semi-Longhair' },
];
