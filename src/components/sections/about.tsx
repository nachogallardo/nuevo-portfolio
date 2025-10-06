"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Code, Users, Target } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: "Desarrollo Java",
      description: "Especializado en Java SE y frameworks modernos"
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Experiencia colaborativa en metodologías ágiles"
    },
    {
      icon: Target,
      title: "Orientado a Resultados",
      description: "Enfoque en soluciones eficientes y escalables"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-card/30 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-primary" size={24} />
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Mí</span>
                </div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                  <span className="text-gradient bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                    Desarrollador y Especialista Java
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Apasionado por la tecnología, con gran capacidad de aprendizaje, trabajo en equipo y adaptabilidad. 
                  <span className="text-primary font-medium"> Busco seguir creciendo profesionalmente en Java</span> y ampliar mis conocimientos técnicos.
                </p>
              </div>

              {/* Características destacadas */}
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className={`flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card/80 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{transitionDelay: `${0.3 + index * 0.1}s`}}
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{transitionDelay: '0.2s'}}>
              <Link 
                href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=BC4DDBEE397067D0DCC3895F5B3F8015C76D94F423C84C74B73DBB016D0AE199" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift relative z-10">
                  <CardContent className="flex flex-col items-center justify-center gap-6 text-center">
                    <Image
                      src="https://images.credly.com/images/be8fcaeb-c769-4afc-9897-1ae8f5f660e1/oracle-certified-professional-java-se-11-developer.png"
                      alt="Oracle Certified Professional, Java SE 11 Developer Badge"
                      width={180}
                      height={180}
                      className="mx-auto rounded-lg"
                      priority
                    />
                    <div className="space-y-2">
                      <p className="font-bold text-lg group-hover:text-primary transition-colors">
                        Java SE 11 Developer
                      </p>
                      <p className="text-sm text-muted-foreground font-mono">
                        Oracle Certification (1Z0-819)
                      </p>
                      <div className="flex items-center justify-center gap-2 text-xs text-primary font-medium">
                        <Award size={14} />
                        <span>Certificación Oficial</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
