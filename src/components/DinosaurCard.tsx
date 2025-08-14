import { ShoppingCart, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dinosaur } from '../store/cartStore';
import { useCartStore } from '../store/cartStore';
import { useToast } from '../hooks/use-toast';

interface DinosaurCardProps {
  dinosaur: Dinosaur;
  index: number;
}

const DinosaurCard = ({ dinosaur, index }: DinosaurCardProps) => {
  const { addItem } = useCartStore();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!dinosaur.inStock) {
      toast({
        title: "No disponible",
        description: "Este dinosaurio no está en stock actualmente.",
        variant: "destructive"
      });
      return;
    }

    addItem(dinosaur);
    toast({
      title: "¡Agregado al carrito!",
      description: `${dinosaur.name} ha sido agregado a tu carrito.`,
    });
    
    console.log('Added to cart:', dinosaur.name);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'carnivore': return 'bg-red-100 text-red-800';
      case 'herbivore': return 'bg-green-100 text-green-800';
      case 'omnivore': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'carnivore': return '🦖';
      case 'herbivore': return '🦴';
      case 'omnivore': return '🍃';
      default: return '🦕';
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img
          src={dinosaur.image}
          alt={dinosaur.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(dinosaur.category)}`}>
            {getCategoryEmoji(dinosaur.category)} {dinosaur.category}
          </span>
        </div>
        {!dinosaur.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Agotado
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900">{dinosaur.name}</h3>
          <span className="text-sm text-gray-500">{dinosaur.period}</span>
        </div>
        
        <p className="text-sm text-gray-600 italic mb-2">{dinosaur.species}</p>
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">{dinosaur.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${dinosaur.price.toLocaleString()}
          </span>
          
          <div className="flex space-x-2">
            <button className="p-2 text-gray-500 hover:text-green-600 transition-colors">
              <Info size={20} />
            </button>
            
            <motion.button
              onClick={handleAddToCart}
              disabled={!dinosaur.inStock}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
                dinosaur.inStock
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              whileHover={dinosaur.inStock ? { scale: 1.05 } : {}}
              whileTap={dinosaur.inStock ? { scale: 0.95 } : {}}
            >
              <ShoppingCart size={16} />
              <span className="hidden sm:inline">
                {dinosaur.inStock ? 'Agregar' : 'Agotado'}
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DinosaurCard;