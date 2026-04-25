"use client";

const categories = [
  { id: "todos", name: "Colección" },
  { id: "Sillas", name: "Asientos" },
  { id: "Accesorios", name: "Accesorios" },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-2 py-2 text-[10px] uppercase tracking-[0.25em] font-semibold transition-all duration-500 border-b-2 ${
            selectedCategory === category.id
              ? "text-stone-900 border-stone-900"
              : "text-stone-400 border-transparent hover:text-stone-600 hover:border-stone-200"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
