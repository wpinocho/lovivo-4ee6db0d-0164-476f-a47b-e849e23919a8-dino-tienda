import { motion } from 'framer-motion';
import { ArrowDown, Star, Shield, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToCatalog = () => {
    const catalog = document.getElementById('catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Domesticados",
      description: "Todos nuestros dinosaurios están completamente entrenados"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Cuidado Garantizado",
      description: "Incluimos manual de cuidados y soporte 24/7"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Calidad Premium",
      description: "Solo los mejores especímenes de cada era"
    }
  ];

  console.log('Hero component rendered');

  return (
    <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Bienvenido a
              <span className="block text-green-300">DinoStore</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              La primera y única tienda especializada en dinosaurios domesticados. 
              Encuentra tu compañero prehistórico perfecto.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button
              onClick={scrollToCatalog}
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Ver Catálogo 🦕
            </button>
            
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Sobre Nosotros
            </button>
          </motion.div>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16 flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <button
              onClick={scrollToCatalog}
              className="text-green-300 hover:text-white transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;