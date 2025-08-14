import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import DinosaurCard from './DinosaurCard';
import Filters from './Filters';
import { dinosaurs } from '../data/dinosaurs';

const DinosaurCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30000]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDinosaurs = useMemo(() => {
    console.log('Filtering dinosaurs with:', { selectedCategory, priceRange, searchTerm });
    
    return dinosaurs.filter(dinosaur => {
      const matchesCategory = selectedCategory === 'all' || dinosaur.category === selectedCategory;
      const matchesPrice = dinosaur.price >= priceRange[0] && dinosaur.price <= priceRange[1];
      const matchesSearch = searchTerm === '' || 
        dinosaur.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dinosaur.species.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [selectedCategory, priceRange, searchTerm]);

  console.log('Catalog rendered with', filteredDinosaurs.length, 'dinosaurs');

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Catálogo de Dinosaurios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra increíble colección de dinosaurios domesticados, 
            perfectos para cualquier hogar o aventura.
          </p>
        </div>

        <Filters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <div className="mb-4 flex justify-between items-center">
          <p className="text-gray-600">
            Mostrando {filteredDinosaurs.length} de {dinosaurs.length} dinosaurios
          </p>
        </div>

        {filteredDinosaurs.length === 0 ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🦕</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No se encontraron dinosaurios
            </h3>
            <p className="text-gray-500">
              Intenta ajustar los filtros para encontrar tu dinosaurio perfecto.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            {filteredDinosaurs.map((dinosaur, index) => (
              <DinosaurCard
                key={dinosaur.id}
                dinosaur={dinosaur}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DinosaurCatalog;