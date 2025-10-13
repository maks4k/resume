import React from "react";
import { PetProductsSkeleton } from "./PetProductsSkeleton";
import { FrelanceProductsSkeleton } from "./FrelanceProductsSkeleton";

export const ProductsSkeleton = () => {
  return (
    <div className="bg-white min-h-screen">
      <FrelanceProductsSkeleton />
      <PetProductsSkeleton />
    </div>
  );
};