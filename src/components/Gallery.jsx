import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import gallery, { galleryCategories } from '../data/gallery.js';

export default function Gallery() {
  const [category, setCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    category === 'All' ? gallery : gallery.filter((g) => g.category === category);

  const openLightbox = (id) => {
    setLightboxIndex(filtered.findIndex((g) => g.id === id));
  };
  const closeLightbox = () => setLightboxIndex(null);
  const step = (dir) => {
    setLightboxIndex((i) => (i === null ? i : (i + dir + filtered.length) % filtered.length));
  };

  const active = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section id="gallery" className="section-pad bg-sand-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="eyebrow">Media &amp; Gallery</span>
          <h2 className="text-3xl md:text-4xl mt-3 text-indigo">A closer look at Cya Inn</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium border transition-colors duration-300 ${
                category === cat
                  ? 'bg-indigo text-sand-50 border-indigo'
                  : 'bg-transparent text-ink/70 border-sand-200 hover:border-gold hover:text-indigo'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
          {filtered.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openLightbox(item.id)}
              className="block w-full overflow-hidden group focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 group-hover:brightness-90 transition-all duration-500"
              />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-indigo-deep/95 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close preview"
            className="absolute top-6 right-6 text-sand-50 hover:text-gold p-2"
          >
            <X size={28} />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous image"
            className="absolute left-3 md:left-8 text-sand-50 hover:text-gold p-2"
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[80vh] max-w-full object-contain shadow-card"
          />
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next image"
            className="absolute right-3 md:right-8 text-sand-50 hover:text-gold p-2"
          >
            <ChevronRight size={32} />
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sand-100/80 text-xs uppercase tracking-wider">
            {active.category}
          </p>
        </div>
      )}
    </section>
  );
}
