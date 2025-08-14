import { Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Filters = ({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  searchTerm,
  onSearchChange
}: FiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { value: 'all', label: 'Todos', emoji: '🦕' },
    { value: 'carnivore', label: 'Carnívoros', emoji: '🦖' },
    { value: 'herbivore', label: 'Herbívoros', emoji: '🦴' },
    { value: 'omnivore', label: 'Omnívoros', emoji: '🍃' }
  ];

  console.log('Filters rendered with category:', selectedCategory);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Filter size={20} />
          Filtros
        </h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-green-100 p-2 rounded-full"
        >
          {isOpen ? <X size={20} /> : <Filter size={20} />}
        </button>
      </div>

      <AnimatePresence>
        <motion.div
          className={`space-y-4 ${isOpen ? 'block' : 'hidden md:block'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {/* Búsqueda */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Buscar dinosaurio
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Nombre o especie..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Categorías */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categoría
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => onCategoryChange(category.value)}
                  className={`p-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="block">{category.emoji}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rango de precios */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rango de precio: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
            </label>
            <div className="flex space-x-4">
              <input
                type="range"
                min="0"
                max="30000"
                step="500"
                value={priceRange[0]}
                onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min="0"
                max="30000"
                step="500"
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Filters;