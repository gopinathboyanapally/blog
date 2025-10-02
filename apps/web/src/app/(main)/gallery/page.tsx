import { fetchGalleryItems } from '@repo/api/brand';
import Image from 'next/image';

// import { Card } from "@/components/ui/card"

export default async function GallerySection() {
  const galleryItems = await fetchGalleryItems(9);

  return (
    <section className="container bg-secondary/20 py-24 md:py-32" id="gallery">
      <div className="mb-12">
        <h2 className="mb-4 text-balance font-bold text-3xl tracking-tight md:text-4xl">
          Featured Work
        </h2>
        <p className="max-w-2xl text-pretty text-lg text-muted-foreground">
          A selection of our recent projects showcasing our expertise in design
          and development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <div
            className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur transition-all duration-300 hover:border-primary/50"
            key={item.id}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                alt={item.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                fill
                src={item.thumbnailUrl}
              />
            </div>
            <div className="p-6">
              <div className="mb-2 font-medium text-primary text-xs uppercase tracking-wider">
                {item.category}
              </div>
              <h3 className="mb-2 text-balance font-semibold text-lg">
                {item.title}
              </h3>
              <p className="line-clamp-2 text-pretty text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
