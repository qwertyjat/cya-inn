import { ArrowRight } from 'lucide-react';
import blog from '../data/blog.js';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export default function Blog() {
  return (
    <section id="blog" className="section-pad bg-sand-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="eyebrow">From the Blog</span>
          <h2 className="text-3xl md:text-4xl mt-3 text-indigo">Sikar, Shekhawati &amp; the hotel</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blog.map((post) => (
            <article key={post.id} className="group flex flex-col bg-sand-100 shadow-card">
              <div className="overflow-hidden h-52">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-ink/50 mb-3">
                  <span className="text-gold-dark font-medium uppercase tracking-wider">{post.category}</span>
                  <span>&middot;</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <h3 className="font-display text-lg text-indigo mb-2 leading-snug">{post.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed flex-1">{post.excerpt}</p>
                <a
                  href={`#blog-${post.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-rust mt-5"
                >
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
