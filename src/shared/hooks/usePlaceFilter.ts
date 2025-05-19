import { useState } from 'react';

export const types = ['합주실', '소극장'] as const;

export function usePlaceFilter() {
  const [checkedTypes, setCheckedTypes] = useState<string[]>([...types]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 250000]);
  const [areaItems, setAreaItems] = useState<string[]>([]);

  const toggleType = (type: string) => {
    setCheckedTypes((prev) => {
      const isSelected = prev.includes(type);
      if (isSelected) {
        if (prev.length <= 1) return prev;
        return prev.filter((t) => t !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  const toggleAreaItem = (district: string) => {
    setAreaItems((prev) => {
      const isSelected = prev.includes(district);
      if (isSelected) {
        return prev.filter((item) => item !== district);
      } else {
        return [...prev, district];
      }
    });
  };

  const resetFilters = () => {
    setCheckedTypes([...types]);
    setPriceRange([0, 250000]);
    setAreaItems([]);
  };

  return {
    checkedTypes,
    priceRange,
    areaItems,
    toggleType,
    toggleAreaItem,
    resetFilters,
    setPriceRange,
    setAreaItems,
  };
}
