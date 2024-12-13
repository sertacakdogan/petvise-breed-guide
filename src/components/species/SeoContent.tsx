import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SeoContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-white rounded-lg p-6 mt-12">
      <h2 className="text-2xl font-semibold mb-4">
        Understanding Different Pet Breeds for a Happy Home
      </h2>
      
      <Button
        variant="ghost"
        className="w-full flex items-center justify-between mb-4 md:hidden"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>Read More</span>
        {isExpanded ? <ChevronUp /> : <ChevronDown />}
      </Button>

      <div className={`space-y-4 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        <p>
          Choosing the right pet breed is a crucial decision that impacts both your life and your future companion's well-being. Our comprehensive pet breed guides provide detailed information about different species and breeds, helping you make an informed choice that matches your lifestyle, living situation, and care capabilities.
        </p>
        
        <p>
          Whether you're interested in loyal dogs, independent cats, colorful birds, or exotic pets, understanding breed-specific characteristics is essential. Each breed comes with unique traits, care requirements, and health considerations that potential pet owners should carefully evaluate before making a decision.
        </p>
        
        <p>
          Our expert-curated guides cover various aspects of pet ownership, including:
        </p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Breed-specific temperament and personality traits</li>
          <li>Exercise and activity level requirements</li>
          <li>Grooming and maintenance needs</li>
          <li>Health considerations and genetic predispositions</li>
          <li>Training and socialization recommendations</li>
          <li>Compatibility with children and other pets</li>
        </ul>
        
        <p>
          By thoroughly researching different pet breeds, you can ensure a harmonious relationship with your future companion and provide them with the best possible care throughout their life. Remember that responsible pet ownership begins with choosing the right breed that aligns with your capabilities and circumstances.
        </p>
      </div>
    </section>
  );
};
