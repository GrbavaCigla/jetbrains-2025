"use client"

import { useEffect, useState } from "react";

interface Props {
  defaultGroupChecked?: boolean;
  categories: string[];
  onChange?: (groupChecked: boolean, categories: string[]) => void;
}

export default function CategoryBarChartSidebar({ defaultGroupChecked = false, onChange, categories }: Props) {
  const [groupChecked, setGroupChecked] = useState(defaultGroupChecked);
  const [cats, setCats] = useState(categories);

  useEffect(() => 
    setCats((prev) => {
      const prevSet = new Set(prev);
      const nextSet = new Set(categories);
  
      const structureChanged =
        prev.length !== categories.length ||
        [...nextSet].some((c) => !prevSet.has(c));
  
      return structureChanged ? categories : prev;
    }), [categories.join(",")]
  );

  const handleGroupToggleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setGroupChecked(e.target.checked);

  const handleCategoriesToggleChange = (e: React.ChangeEvent<HTMLInputElement>, category: string) =>
    setCats(prev => e.target.checked ? [category, ...prev] : prev.filter((val) => val !== category));

  useEffect(() => {
	console.log(cats);
    if (onChange) onChange(groupChecked, cats);
  }, [groupChecked, cats])

  const toggles = categories.map((val) =>
    <label className="label font-semibold px-4 pb-4" key={val}>
      <span className="pr-4 mr-auto truncate">{val}</span>
      <input type="checkbox" className="checkbox" defaultChecked={true} onChange={(e) => handleCategoriesToggleChange(e, val)} />
    </label>
  );

  return (
    <div className="bg-white border-(length:--border) flex flex-col md:max-w-xs overflow-hidden h-full">
      <h3 className="text-lg font-bold text-center p-4">Filters</h3>
      <label className="label font-semibold px-4 pb-4 border-b-(length:--border) border-black">
        <span className="pr-4 mr-auto">Group categories</span>
        <input type="checkbox" checked={groupChecked} onChange={handleGroupToggleChange} className="toggle" />
      </label>
      <div className="pt-4 overflow-y-scroll flex-1">
        <div className="flex flex-col">{toggles}</div>
      </div>
    </div>
  );
}

