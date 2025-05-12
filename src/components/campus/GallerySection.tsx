import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/8471826/pexels-photo-8471826.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'School building',
    category: 'infrastructure'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/8471944/pexels-photo-8471944.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Classroom',
    category: 'infrastructure'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/8471731/pexels-photo-8471731.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Science lab',
    category: 'infrastructure'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/8472072/pexels-photo-8472072.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Computer lab',
    category: 'infrastructure'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/8472043/pexels-photo-8472043.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Library',
    category: 'infrastructure'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/8471899/pexels-photo-8471899.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Playground',
    category: 'sports'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/8471765/pexels-photo-8471765.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Sports event',
    category: 'sports'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/8471774/pexels-photo-8471774.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Basketball court',
    category: 'sports'
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/8472003/pexels-photo-8472003.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Cultural performance',
    category: 'events'
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/8926814/pexels-photo-8926814.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Annual function',
    category: 'events'
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/8926810/pexels-photo-8926810.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Art exhibition',
    category: 'events'
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/8926580/pexels-photo-8926580.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Science exhibition',
    category: 'events'
  }
];

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'sports', name: 'Sports' },
    { id: 'events', name: 'Events' }
  ];
  
  const openLightbox = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Gallery</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            Take a visual tour of our campus facilities and student activities.
          </p>
          
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              onClick={() => openLightbox(image.src, image.alt)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            <div 
              className="max-w-4xl max-h-[80vh]"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-w-full max-h-[80vh] object-contain"
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;