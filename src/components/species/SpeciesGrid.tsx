import React from 'react';
import { SpeciesCard } from './SpeciesCard';
import { speciesCategories } from '@/data/species-categories';

export const SpeciesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {speciesCategories.map((species) => (
        <SpeciesCard key={species.id} species={species} />
      ))}
    </div>
  );
};
