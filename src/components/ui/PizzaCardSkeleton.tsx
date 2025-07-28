import React from 'react';

const PizzaCardSkeleton: React.FC = () => {
  return (
    <div className="card-pizza dark:bg-gray-800 animate-pulse">
      {/* Skeleton Image */}
      <div className="relative overflow-hidden rounded-xl mb-6">
        <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div>
      </div>

      {/* Skeleton Info */}
      <div className="space-y-3">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-3/4"></div>
        
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCardSkeleton;