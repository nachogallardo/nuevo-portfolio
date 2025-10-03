import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(img => img.id === 'projects-hero');

export function HeroSectionProjects() {
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Mis Proyectos
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">
            Una selección de mis trabajos más recientes y destacados.
          </p>
        </div>
      </div>
    </section>
  );
}
