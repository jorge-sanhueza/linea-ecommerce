"use client";

const categories = [
  { id: "todos", name: "Todos" },
  { id: "Sillas", name: "Sillas" },
  { id: "Basureros", name: "Basureros" },
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
    <div className="flex gap-2 flex-wrap">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 text-sm transition-all duration-300 ${
            selectedCategory === category.id
              ? "text-gray-900 border-b-2 border-blue-400"
              : "text-gray-400 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
