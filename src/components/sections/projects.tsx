"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const projects = [
  {
    title: "Sistema de Gestión de Fincas",
    description: "Plataforma integral para la administración de fincas, automatizando la facturación, gestión de incidencias y comunicación con propietarios. Desarrollado con Spring Boot y arquitectura de microservicios.",
    image: PlaceHolderImages.find(img => img.id === 'project-1'),
    tags: ["Java", "Spring Boot", "Microservicios", "React"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "E-commerce de Moda",
    description: "Tienda online de alto rendimiento con pasarela de pago segura, sistema de recomendaciones personalizadas y un panel de administración para gestionar el catálogo y los pedidos. Implementado con Jakarta EE y JPA/Hibernate.",
    image: PlaceHolderImages.find(img => img.id === 'project-2'),
    tags: ["Jakarta EE", "JPA", "MySQL", "JavaScript"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "API para App de Smart Home",
    description: "Backend RESTful para una aplicación móvil que controla dispositivos inteligentes en el hogar. La API gestiona la autenticación, la comunicación en tiempo real con los dispositivos y la persistencia de datos en MongoDB.",
    image: PlaceHolderImages.find(img => img.id === 'project-3'),
    tags: ["REST API", "MongoDB", "Docker", "JWT"],
    github: "#",
    live: "#",
    featured: false
  },
];

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="proyectos" className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-card/20 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Eye className="text-primary" size={24} />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            </div>
            <h2 className={`font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '0.1s'}}>
              <span className="text-gradient bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Mis Proyectos
              </span>
            </h2>
            <p className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '0.2s'}}>
              Una selección de mis trabajos más recientes y destacados, donde aplico las mejores prácticas de desarrollo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`group flex flex-col overflow-hidden bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{transitionDelay: `${0.3 + index * 0.1}s`}}
              >
                {project.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={project.image.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Overlay de acciones */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button size="sm" variant="secondary" className="glass-effect">
                        <Github size={16} className="mr-2" />
                        Código
                      </Button>
                      <Button size="sm" variant="secondary" className="glass-effect">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </div>

                    {/* Badge de destacado */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">
                          Destacado
                        </Badge>
                      </div>
                    )}
                  </div>
                )}

                <CardHeader className="pb-4">
                  <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground flex-grow mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="cursor-default hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                        style={{transitionDelay: `${0.6 + index * 0.1 + tagIndex * 0.05}s`}}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Github size={14} className="mr-2" />
                      Código
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            ))}
          </div>

          {/* CTA para ver más proyectos */}
          <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.8s'}}>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-white glass-effect-dark hover:border-primary transition-all duration-300 hover:scale-105"
            >
              <Eye className="mr-2 h-5 w-5" />
              Ver Todos los Proyectos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
