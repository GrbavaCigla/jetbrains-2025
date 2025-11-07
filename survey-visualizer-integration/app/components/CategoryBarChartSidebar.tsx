"use client"

import { useState } from "react";

interface Props {
  defaultGroupChecked?: boolean;
  onChange?: (groupChecked: boolean) => void;
}

export default function CategoryBarChartSidebar({defaultGroupChecked = false, onChange }: Props) {
  const [groupChecked, setGroupChecked] = useState(defaultGroupChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupChecked(e.target.checked);
    if (onChange) onChange(e.target.checked);
  };

  return (
    <div className="bg-white border-(length:--border) p-4">
      <h3 className="text-lg font-bold text-center mb-4">Filters</h3>
      <div className="flex flex-col items-end">
        <label className="label font-semibold">
          <span className="mr-8">Group categories</span>
          <input type="checkbox" checked={groupChecked} onChange={handleChange} className="toggle" />
        </label>
      </div>
    </div>
  );
}

