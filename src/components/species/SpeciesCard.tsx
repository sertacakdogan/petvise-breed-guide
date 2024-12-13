import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { SpeciesCategory } from '@/data/species-categories';

interface SpeciesCardProps {
  species: SpeciesCategory;
}

export const SpeciesCard = ({ species }: SpeciesCardProps) => {
  return (
    <Link 
      to={`/pet-breed-guides/${species.id}`}
      className="block transition-transform hover:-translate-y-1"
    >
      <Card className="h-full overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={species.imageUrl}
            alt={`${species.name} breeds`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <CardHeader className="p-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            {species.name}
            <span className="text-lg">
              {species.emojis.map((emoji) => emoji).join(' ')}
            </span>
          </h3>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <p className="text-sm text-muted-foreground">
            {species.description}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {species.breedCount} breeds available
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
