import { ShoppingCart, Menu } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { motion } from 'framer-motion';

const Header = () => {
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  console.log('Header rendered, total items:', totalItems);

  return (
    <header className="bg-gradient-to-r from-green-800 to-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold">🦕 DinoStore</h1>
            <span className="hidden md:block text-sm opacity-80">Tu tienda de dinosaurios</span>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-green-200 transition-colors">Inicio</a>
            <a href="#" className="hover:text-green-200 transition-colors">Catálogo</a>
            <a href="#" className="hover:text-green-200 transition-colors">Sobre Nosotros</a>
            <a href="#" className="hover:text-green-200 transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="md:hidden">
              <Menu size={24} />
            </button>
            
            <motion.button
              onClick={toggleCart}
              className="relative bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <motion.span
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {totalItems}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;