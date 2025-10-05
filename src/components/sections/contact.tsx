"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github, MessageCircle, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { toast } from '@/hooks/use-toast';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
    { icon: MapPin, text: "Sevilla, España" },
    { icon: Clock, text: "Disponible para proyectos" },
    { icon: MessageCircle, text: "Respuesta rápida" }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevenir múltiples envíos
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      
      // Evitar que datos de autofill interfieran
      formData.delete('username');
      formData.delete('password');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarme. Te responderé pronto.",
        });
        
        // Resetear formulario
        formRef.current?.reset();
      } else {
        throw new Error(result.message || 'Error al enviar el formulario');
      }
    } catch (error) {
      setSubmitStatus('error');
      
      let errorMessage = "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.";
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Error al enviar",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-20 bg-gradient-to-br from-background via-background to-muted/20"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <MessageCircle className="h-4 w-4" />
            <span>Contacto</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Hablemos de tu proyecto
            </span>
          </h2>
          
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            ¿Tienes una idea? ¿Necesitas un desarrollador? Estoy aquí para ayudarte a convertir tus ideas en realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Información de contacto */}
          <div className={`space-y-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Link
                    key={index}
                    href={method.href}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Información adicional</h4>
              <div className="space-y-3">
                {info.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground">
                    <item.icon className="h-4 w-4 text-primary" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'your-access-key'} />
                  <input type="hidden" name="subject" value="Nuevo mensaje desde el portfolio" />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Tu nombre completo"
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="¿En qué puedo ayudarte?"
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                    />
                  </div>


                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </div>
                    ) : submitStatus === 'success' ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>¡Enviado!</span>
                      </div>
                    ) : submitStatus === 'error' ? (
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        <span>Error - Inténtalo de nuevo</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        <span>Enviar mensaje</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}