import React, { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { type Species } from './SpeciesFilter';
import { BreedCard } from './BreedCard';
import { CategoryFilters } from './category/CategoryFilters';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useIsMobile } from '@/hooks/use-mobile';
import { dogBreeds, dogSubCategories } from '@/data/species/dogs';
import { catBreeds, catSubCategories } from '@/data/species/cats';
import { birdBreeds, birdSubCategories } from '@/data/species/birds';
import { fishBreeds, fishSubCategories } from '@/data/species/fish';
import { smallMammalBreeds, smallMammalSubCategories } from '@/data/species/small-mammals';
import { exoticBreeds, exoticSubCategories } from '@/data/species/exotic';
import { farmBreeds, farmSubCategories } from '@/data/species/farm';
import { reptileBreeds, reptileSubCategories } from '@/data/species/reptiles';
import { insectBreeds, insectSubCategories } from '@/data/species/insects';

const ITEMS_PER_PAGE = 10;

type SortOption = 'default' | 'asc' | 'desc';

export const CategoryGrid = () => {
  const navigate = useNavigate();
  const { species } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const isMobile = useIsMobile();
  
  const selectedSubCategories = searchParams.getAll('subCategory[]');
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const handleSpeciesSelect = (selectedSpecies: Species) => {
    navigate(`/pet-breed-guides/${selectedSpecies}`);
  };

  const handleSubCategoryChange = (subCategory: string) => {
    const newSubCategories = selectedSubCategories.includes(subCategory)
      ? selectedSubCategories.filter(sc => sc !== subCategory)
      : [...selectedSubCategories, subCategory];

    updateUrlParams(newSubCategories, currentPage);
  };

  const updateUrlParams = (subCategories: string[], page: number) => {
    const params = new URLSearchParams();
    
    subCategories.forEach(category => {
      params.append('subCategory[]', category);
    });
    
    if (page > 1) {
      params.set('page', page.toString());
    }
    
    setSearchParams(params);
  };

  const getSubCategories = () => {
    switch (species) {
      case 'dogs': return dogSubCategories;
      case 'cats': return catSubCategories;
      case 'birds': return birdSubCategories;
      case 'fish': return fishSubCategories;
      case 'small-mammals': return smallMammalSubCategories;
      case 'exotic': return exoticSubCategories;
      case 'farm': return farmSubCategories;
      case 'reptiles': return reptileSubCategories;
      case 'insects': return insectSubCategories;
      default: return [];
    }
  };

  const getAllBreeds = () => {
    switch (species) {
      case 'dogs': return dogBreeds;
      case 'cats': return catBreeds;
      case 'birds': return birdBreeds;
      case 'fish': return fishBreeds;
      case 'small-mammals': return smallMammalBreeds;
      case 'exotic': return exoticBreeds;
      case 'farm': return farmBreeds;
      case 'reptiles': return reptileBreeds;
      case 'insects': return insectBreeds;
      default: return [];
    }
  };

  const filteredBreeds = species
    ? getAllBreeds().filter(breed => 
        selectedSubCategories.length === 0 || 
        selectedSubCategories.includes(breed.subCategory)
      )
    : [];

  const sortedBreeds = [...filteredBreeds].sort((a, b) => {
    switch (sortOption) {
      case 'asc': return a.name.localeCompare(b.name);
      case 'desc': return b.name.localeCompare(a.name);
      default: return (a.popularity || 0) - (b.popularity || 0);
    }
  });

  const totalPages = Math.ceil(sortedBreeds.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBreeds = sortedBreeds.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    updateUrlParams(selectedSubCategories, newPage);
  };

  return (
    <div className="space-y-6">
      <CategoryFilters
        species={species}
        selectedSubCategories={selectedSubCategories}
        onSpeciesSelect={handleSpeciesSelect}
        onSubCategoryChange={handleSubCategoryChange}
        getSubCategories={getSubCategories}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
        {!isMobile && species && getSubCategories().length > 0 && (
          <aside>
            <div className="space-y-4">
              <h4 className="font-medium">Sub Categories</h4>
              <div className="space-y-2">
                {getSubCategories().map((subCategory) => (
                  <div key={subCategory.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={subCategory.id}
                      checked={selectedSubCategories.includes(subCategory.id)}
                      onChange={() => handleSubCategoryChange(subCategory.id)}
                      className="rounded border-gray-300"
                    />
                    <label htmlFor={subCategory.id}>{subCategory.label}</label>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}
        
        <div>
          <div className="flex justify-end mb-6">
            <Select
              value={sortOption}
              onValueChange={(value: SortOption) => setSortOption(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default (Popularity)</SelectItem>
                <SelectItem value="asc">Name (A to Z)</SelectItem>
                <SelectItem value="desc">Name (Z to A)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentBreeds.map((breed) => (
              <BreedCard key={breed.id} breed={breed} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                  </PaginationItem>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      isActive={pageNum === currentPage}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
};
