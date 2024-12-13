import React from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CategoryGrid } from '@/components/CategoryGrid';
import { Header } from '@/components/Header';
import { CategorySeoContent } from '@/components/species/CategorySeoContent';
import { categorySeoContent } from '@/data/category-seo-content';
import { categoryDescriptions } from '@/data/category-descriptions';

const Index = () => {
  const { species } = useParams();

  const getBreadcrumbItems = () => {
    const items = [{ label: 'Pet Breed Guides', href: '/' }];
    
    if (species) {
      items.push({
        label: species.charAt(0).toUpperCase() + species.slice(1),
        href: `/pet-breed-guides/${species}`
      });
    }
    
    return items;
  };

  const getFormattedTitle = () => {
    if (!species) return 'Pet Breed Guides';
    
    // Convert species to proper format (e.g., "small-mammals" to "Small Mammals")
    const formattedSpecies = species
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return `${formattedSpecies} Breeds Care Guide`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={getBreadcrumbItems()} />
        <h1 className="text-4xl font-bold text-textDark mb-8 mt-4">
          {getFormattedTitle()}
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          {species ? categoryDescriptions[species] : 'Discover comprehensive information about different pet breeds across various species.'}
        </p>
        <CategoryGrid />
        {species && categorySeoContent[species] && (
          <CategorySeoContent content={categorySeoContent[species]} />
        )}
      </main>
    </div>
  );
};

export default Index;
