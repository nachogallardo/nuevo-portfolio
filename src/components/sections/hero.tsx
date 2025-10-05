"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Sparkles } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useState } from 'react';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-banner');

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const showProjects = process.env.NEXT_PUBLIC_SHOW_PROJECTS === 'true';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover transition-transform duration-1000 hover:scale-105"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      
      {/* Gradiente overlay mejorado para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" aria-hidden="true" />
      
      {/* Overlay adicional para texto */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      
      {/* Efectos de partículas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 container px-4 md:px-6">
        <div className={`max-w-4xl mx-auto space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Fondo semi-transparente para el texto */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-3xl -m-8 p-8"></div>
          <div className="relative z-10">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl text-outline">
              Ignacio Gallardo Sánchez
            </h1>
            <Sparkles className="absolute -top-4 -right-4 text-primary animate-pulse drop-shadow-lg" size={24} />
          </div>
          
          <p className="relative z-10 text-lg text-white md:text-xl max-w-xl mx-auto leading-relaxed text-outline-light">
            <span className="inline-block animate-slide-up font-medium" style={{animationDelay: '0.3s'}}>
              Desarrollador Java Certificado.
            </span>
            <br />
            <span className="inline-block animate-slide-up text-gray-100 font-semibold" style={{animationDelay: '0.6s'}}>
              Creando soluciones eficientes y escalables.
            </span>
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            {showProjects && (
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-accent to-primary text-white hover:from-accent/90 hover:to-primary/90 transform hover:scale-105 transition-all duration-300 hover-glow animate-slide-up"
                style={{animationDelay: '0.9s'}}
              >
                <Link href="/proyectos">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Mis Proyectos
                </Link>
              </Button>
            )}
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-white glass-effect-dark hover:border-primary transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{animationDelay: showProjects ? '1.2s' : '0.9s'}}
            >
              <Link href="#contact">
                Hablemos
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
