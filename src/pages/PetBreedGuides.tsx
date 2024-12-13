import React from 'react';
import { Header } from '@/components/Header';
import { SpeciesGrid } from '@/components/species/SpeciesGrid';
import { SeoContent } from '@/components/species/SeoContent';

const PetBreedGuides = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Pet Breed Guides
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive guides to discover the perfect companion for your lifestyle. 
            Learn about various breeds and their unique needs.
          </p>
        </div>

        <SpeciesGrid />
        <SeoContent />
      </main>
    </div>
  );
};

export default PetBreedGuides;
