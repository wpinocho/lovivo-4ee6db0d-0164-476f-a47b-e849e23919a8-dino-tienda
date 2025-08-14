import Header from '../components/Header';
import Hero from '../components/Hero';
import DinosaurCatalog from '../components/DinosaurCatalog';
import Cart from '../components/Cart';
import { motion } from 'framer-motion';

const Index = () => {
  console.log('Index page rendered');

  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Hero />
      
      <div id="catalog">
        <DinosaurCatalog />
      </div>
      
      <Cart />
      
      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🦕 DinoStore</h3>
              <p className="text-green-200">
                Tu tienda de confianza para dinosaurios domesticados desde 2024.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Productos</h4>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-white">Carnívoros</a></li>
                <li><a href="#" className="hover:text-white">Herbívoros</a></li>
                <li><a href="#" className="hover:text-white">Omnívoros</a></li>
                <li><a href="#" className="hover:text-white">Accesorios</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-white">Guía de Cuidados</a></li>
                <li><a href="#" className="hover:text-white">Entrenamiento</a></li>
                <li><a href="#" className="hover:text-white">Veterinario</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📘</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📷</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🐦</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 DinoStore. Todos los derechos reservados. 🦖</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;