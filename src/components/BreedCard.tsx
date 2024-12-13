import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Breed } from '@/types';

interface BreedCardProps {
  breed: Breed;
}

export const BreedCard = ({ breed }: BreedCardProps) => {
  return (
    <Link to={`/pet-breed-guides/${breed.species}/${breed.id}`} className="block">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-[#f8fcfc]">
        <div className="aspect-square overflow-hidden">
          <img
            src={breed.imageUrl}
            alt={breed.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="p-4">
          <h3 className="text-xl font-semibold">{breed.name}</h3>
          <p className="text-sm text-muted-foreground">{breed.description}</p>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex flex-wrap gap-2">
            {breed.traits.map((trait, index) => (
              <span
                key={index}
                className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
              >
                {trait}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
