interface Props {
  onChange?: (selected: string) => void;
}

export default function DifficultyBarChartSidebar({ onChange }: Props) {

  const handleChange = (val: string) => {
    if (onChange) onChange?.(val);
  };

  return (
    <div className="bg-white border-(length:--border) flex flex-col w-80 p-4 overflow-hidden h-full">
      <h3 className="text-lg font-bold text-center pb-4">Filters</h3>
      <div className="filter items-center justify-center">
        <input
          className="btn filter-reset"
          type="radio"
          name="difficulties"
          aria-label="All"
          onChange={() => handleChange("all")}
        />
        <input
          className="btn btn-success"
          type="radio"
          name="difficulties"
          aria-label="Easy"
          onChange={() => handleChange("easy")}
        />
        <input
          className="btn btn-warning"
          type="radio"
          name="difficulties"
          aria-label="Medium"
          onChange={() => handleChange("medium")}
        />
        <input
          className="btn btn-error"
          type="radio"
          name="difficulties"
          aria-label="Hard"
          onChange={() => handleChange("hard")}
        />
      </div>
    </div>
  );
}
