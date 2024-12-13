import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { CategorySeoContent as CategorySeoContentType } from '@/types';

interface CategorySeoContentProps {
  content: CategorySeoContentType;
}

export const CategorySeoContent = ({ content }: CategorySeoContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white rounded-lg p-6 mt-12">
      <h2 className="text-2xl font-semibold mb-4">
        {content.title}
      </h2>
      
      <div className={`relative ${!isExpanded ? 'max-h-[200px]' : ''} overflow-hidden`}>
        <div 
          ref={contentRef}
          className="space-y-4"
        >
          <p className="text-muted-foreground">
            {content.description}
          </p>
          
          <div 
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </div>
        
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      <Button
        variant="ghost"
        className="w-full mt-4 flex items-center justify-center gap-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>
    </section>
  );
};
