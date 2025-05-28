import React, { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    title: "Opening Ceremony 2024",
    src: "src/public/high.jpg",
    category: "ceremony"
  },
  {
    id: 2,
    title: "Committee Session: UNSC",
    src: "src/public/high2.jpg",
    category: "committee"
  },
  {
    id: 3,
    title: "Delegate Networking",
    src: "src/public/high3.jpg",
    category: "social"
  },
  {
    id: 4,
    title: "Panel Discussion",
    src: "src/public/high4.jpg",
    category: "ceremony"
  },
  {
    id: 5,
    title: "Award Ceremony 2024",
    src: "src/public/ctad.jpg",
    category: "ceremony"
  },
  {
    id: 6,
    title: "Committee Session: WHO",
    src: "src/public/india.jpg",
    category: "committee"
  },
  {
    id: 7,
    title: "Cultural Night",
    src: "src/public/high5.jpg",
    category: "social"
  },
  {
    id: 8,
    title: "Guest Lecture",
    src: "src/public/plag.jpg",
    category: "ceremony"
  },
  {
    id: 9,
    title: "Committee Session: UNHRC",
    src: "src/public/unsc.jpg",
    category: "committee"
  }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentImage === null) return;
    
    const totalImages = filteredImages.length;
    let newIndex = direction === 'next' 
      ? (currentImage + 1) % totalImages
      : (currentImage - 1 + totalImages) % totalImages;
      
    setCurrentImage(newIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Photo Gallery</h2>
          <div className="w-20 h-1 bg-red-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore moments from our previous conferences. These photos capture the spirit of debate, diplomacy, and international cooperation that defines the JGU MUN experience.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 m-1 rounded-md transition-colors duration-300 ${
              activeFilter === 'all' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Photos
          </button>
          <button
            onClick={() => setActiveFilter('ceremony')}
            className={`px-4 py-2 m-1 rounded-md transition-colors duration-300 ${
              activeFilter === 'ceremony' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Ceremonies
          </button>
          <button
            onClick={() => setActiveFilter('committee')}
            className={`px-4 py-2 m-1 rounded-md transition-colors duration-300 ${
              activeFilter === 'committee' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Committee Sessions
          </button>
          <button
            onClick={() => setActiveFilter('social')}
            className={`px-4 py-2 m-1 rounded-md transition-colors duration-300 ${
              activeFilter === 'social' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Social Events
          </button>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg shadow-sm group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-medium p-4">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && currentImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              onClick={() => navigateImage('prev')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="max-w-5xl max-h-[80vh] w-full">
              <img 
                src={filteredImages[currentImage].src} 
                alt={filteredImages[currentImage].title}
                className="max-w-full max-h-[80vh] mx-auto object-contain"
              />
              <p className="text-white text-center mt-4 text-lg">{filteredImages[currentImage].title}</p>
            </div>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              onClick={() => navigateImage('next')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;