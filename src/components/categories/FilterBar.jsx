import categories from './categories.json'; // Assurez-vous que le chemin est correct

const FilterBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex space-x-4 p-4">
      <span>Filtrer par :</span>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`flex items-center space-x-2 p-2 rounded-full bg-secondary_bg-500 ${
            selectedCategory === category.value ? 'bg-primary-500 text-white' : ''
          }`}
          onClick={() => setSelectedCategory(category.value)}
        >
          <img src={category.icon} alt={category.label} className="w-6 h-6" />
          <span>{category.label}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
