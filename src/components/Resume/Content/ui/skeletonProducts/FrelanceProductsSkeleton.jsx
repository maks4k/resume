import { Skeleton } from '@/shared/ui/skeleton';
import React from 'react';


export const FrelanceProductsSkeleton = () => {
  return (
    <>
      {/* Скелетон заголовка */}
      <div className="text-center mb-8 py-4 px-6">
        <Skeleton className="h-10 w-80 mx-auto rounded-2xl" />
      </div>
      
      {/* Скелетон сетки карточек */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="p-6 rounded-lg border-2 border-gray-200 flex flex-col h-full min-h-[500px]">
            {/* Заголовок карточки */}
            <Skeleton className="h-7 w-3/4 mb-4 rounded" />
            
            {/* Изображение */}
            <Skeleton className="h-48 w-full rounded-md mb-4" />
            
            {/* Текст контента */}
            <div className="mb-4 flex-grow space-y-2">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-5/6 rounded" />
              <Skeleton className="h-4 w-4/6 rounded" />
            </div>
            
            {/* Кнопка */}
            <div className="mt-auto pt-4">
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};