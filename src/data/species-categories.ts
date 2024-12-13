export interface SpeciesCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  emojis: string[];
  breedCount: number;
}

export const speciesCategories: SpeciesCategory[] = [
  {
    id: 'dogs',
    name: 'Dogs',
    description: 'Loyal companions for every lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1200&h=675',
    emojis: ['🐕', '🦮'],
    breedCount: 11
  },
  {
    id: 'cats',
    name: 'Cats',
    description: 'Independent and affectionate feline friends',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1200&h=675',
    emojis: ['🐱', '😺'],
    breedCount: 12
  },
  {
    id: 'birds',
    name: 'Birds',
    description: 'Colorful and intelligent avian companions',
    imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=1200&h=675',
    emojis: ['🦜', '🦩'],
    breedCount: 8
  },
  {
    id: 'fish',
    name: 'Fish',
    description: 'Peaceful aquatic pets for any home',
    imageUrl: 'https://images.unsplash.com/photo-1520366498724-709889c0c685?auto=format&fit=crop&q=80&w=1200&h=675',
    emojis: ['🐠', '🐟'],
    breedCount: 6
  },
  {
    id: 'small-mammals',
    name: 'Small Mammals',
    description: 'Adorable pocket-sized companions',
    imageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=1200&h=675',
    emojis: ['🐹', '🐰'],
    breedCount: 7
  },
  {
    id: 'reptiles',
    name: 'Reptiles',
    description: 'Fascinating and unique scaled pets',
    imageUrl: 'https://images.unsplash.com/photo-1534295983867-d6d8f7288d2f?auto=format&fit=crop&q=80&w=1200&h=675',
    emojis: ['🦎', '🐢'],
    breedCount: 5
  },
  {
    id: 'exotic',
    name: 'Exotic Pets',
    description: 'Unique and extraordinary animal companions',
    imageUrl: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=80&w=1200&h=675',
    emojis: ['🦦', '🦘'],
    breedCount: 4
  },
  {
    id: 'insects',
    name: 'Insects',
    description: 'Fascinating arthropod companions',
    imageUrl: 'https://images.unsplash.com/photo-1590691566903-692bf5ca6e45?auto=format&fit=crop&q=80&w=1200&h=675',
    emojis: ['🕷️', '🦗'],
    breedCount: 3
  }
];
