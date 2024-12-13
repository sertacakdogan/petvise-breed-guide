import React from 'react';
import { Check } from 'lucide-react';
import { SpeciesFilter, type Species } from '../SpeciesFilter';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

interface CategoryFiltersProps {
  species: string | undefined;
  selectedSubCategories: string[];
  onSpeciesSelect: (species: Species) => void;
  onSubCategoryChange: (subCategory: string) => void;
  getSubCategories: () => Array<{ id: string; label: string; }>;
}

export const CategoryFilters = ({
  species,
  selectedSubCategories,
  onSpeciesSelect,
  onSubCategoryChange,
  getSubCategories,
}: CategoryFiltersProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-6">
      <SpeciesFilter
        selectedSpecies={species as Species || null}
        selectedSubCategories={selectedSubCategories}
        onSpeciesSelect={onSpeciesSelect}
        onSubCategoryChange={onSubCategoryChange}
        availableSubCategories={getSubCategories()}
      />
      
      {species && getSubCategories().length > 0 && isMobile && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground">Sub Categories</h4>
          <div className="flex flex-wrap gap-2">
            {getSubCategories().map((subCategory) => (
              <Button
                key={subCategory.id}
                variant="outline"
                size="sm"
                onClick={() => onSubCategoryChange(subCategory.id)}
                className={`h-7 rounded-full text-xs bg-[#f8fcfc] ${
                  selectedSubCategories.includes(subCategory.id)
                    ? 'border-primary text-primary'
                    : ''
                }`}
              >
                {selectedSubCategories.includes(subCategory.id) && (
                  <Check className="w-3 h-3 mr-1" />
                )}
                {subCategory.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
