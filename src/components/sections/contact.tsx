"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Github, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export function ContactSection() {
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "nachogallardosanchez@gmail.com",
      href: "mailto:nachogallardosanchez@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Conectemos profesionalmente",
      href: "https://www.linkedin.com/in/ignaciogallardosanchez/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Ve mi código en acción",
      href: "https://github.com/nachogallardo",
      color: "from-gray-700 to-gray-900"
    }
  ];

  const info = [
    { icon: MapPin, text: "Madrid, España" },
    { icon: Clock, text: "Disponible para proyectos" },
    { icon: MessageCircle, text: "Respuesta rápida" }
  ];

  return (
    <section ref={sectionRef} id="contacto" className="py-16 md:py-24 bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <MessageCircle className="text-primary" size={24} />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contacto</span>
            </div>
            <h2 className={`font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '0.1s'}}>
              <span className="text-gradient bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                ¡Trabajemos Juntos!
              </span>
            </h2>
            <p className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '0.2s'}}>
              ¿Interesado en colaborar? Contáctame a través de cualquiera de estos medios. 
              <span className="text-primary font-medium"> Estoy disponible para nuevos proyectos y oportunidades.</span>
            </p>
          </div>

          {/* Métodos de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className={`group bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{transitionDelay: `${0.3 + index * 0.1}s`}}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${method.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {method.description}
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Link href={method.href} target={method.title !== "Email" ? "_blank" : undefined} rel="noopener noreferrer">
                      <method.icon className="mr-2 h-4 w-4" />
                      {method.title === "Email" ? "Enviar Email" : `Ver ${method.title}`}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Información adicional */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.6s'}}>
            {info.map((item, index) => (
              <div key={item.text} className="flex items-center justify-center gap-3 p-4 bg-card/50 rounded-lg border border-border/30">
                <div className="p-2 rounded-lg bg-primary/10">
                  <item.icon className="text-primary" size={18} />
                </div>
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA principal */}
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.8s'}}>
            <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
              <CardContent className="space-y-4">
                <h3 className="font-headline text-2xl font-bold text-foreground">
                  ¿Listo para crear algo increíble?
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Estoy disponible para discutir tu proyecto y ayudarte a convertir tus ideas en realidad.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover-glow"
                >
                  <Link href="mailto:nachogallardosanchez@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Mensaje
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
