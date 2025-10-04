"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github, MessageCircle, MapPin, Clock, Send, CheckCircle, AlertCircle, Shield } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { toast } from '@/hooks/use-toast';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
  const [hcaptchaError, setHcaptchaError] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const hcaptchaRef = useRef<HCaptcha>(null);

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

  const handleHCaptchaChange = (token: string | null) => {
    setHcaptchaToken(token);
    setHcaptchaError('');
  };

  const handleHCaptchaExpired = () => {
    setHcaptchaToken(null);
    setHcaptchaError('La verificación ha expirado. Por favor, inténtalo de nuevo.');
  };

  const handleHCaptchaError = () => {
    setHcaptchaToken(null);
    setHcaptchaError('Error en la verificación. Por favor, inténtalo de nuevo.');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!hcaptchaToken) {
      setHcaptchaError('Por favor, completa la verificación de seguridad.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setHcaptchaError('');

    const formData = new FormData(e.currentTarget);
    formData.append('h-captcha-response', hcaptchaToken);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarme. Te responderé pronto.",
        });
        formRef.current?.reset();
        setHcaptchaToken(null);
        hcaptchaRef.current?.reset();
      } else {
      throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
    setSubmitStatus('error');
    toast({
      title: "Error al enviar",
      description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
      variant: "destructive",
    });
    } finally {
    setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contacto" className="py-16 md:py-24 bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-headline text-2xl font-bold text-foreground">
                  Información de Contacto
                </h3>
                <p className="text-muted-foreground">
                  Puedes contactarme a través de cualquiera de estos medios o usar el formulario.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={method.title}
                    className={`group bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{transitionDelay: `${0.3 + index * 0.1}s`}}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                          <method.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold group-hover:text-primary transition-colors">
                            {method.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {method.description}
                          </p>
                        </div>
                        <Button 
                          asChild 
                          variant="ghost" 
                          size="sm"
                          className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          <Link href={method.href} target={method.title !== "Email" ? "_blank" : undefined} rel="noopener noreferrer">
                            <method.icon className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className={`bg-background/80 backdrop-blur-sm border border-border/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.4s'}}>
              <CardContent className="p-6">
                <div className="space-y-4 mb-6">
                  <h3 className="font-headline text-2xl font-bold text-foreground">
                    Envíame solicitud de contacto
                  </h3>
                  <p className="text-muted-foreground">
                    Completa el formulario y me pondré en contacto contigo lo antes posible.
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="access_key" value="7c701178-aa59-46-a6-ad93-f92fba874bb3" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Tu nombre completo"
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
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
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="¿En qué puedo ayudarte?"
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Cuéntame sobre tu proyecto o consulta..."
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <Label className="text-sm font-medium">Verificación de Seguridad *</Label>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/20 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-muted-foreground">
                          Protección anti-spam con hCaptcha
                        </span>
                      </div>
                      
                      <div className="flex justify-center">
                        <HCaptcha
                          ref={hcaptchaRef}
                          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || '00000000-0000-0000-0000-000000000000'}
                          onVerify={handleHCaptchaChange}
                          onExpire={handleHCaptchaExpired}
                          onError={handleHCaptchaError}
                          theme="dark"
                          size="normal"
                        />
                      </div>
                      
                      {hcaptchaError && (
                        <div className="mt-3 flex items-center gap-2 text-red-500 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                          <AlertCircle className="h-4 w-4 flex-shrink-0" />
                          <span>{hcaptchaError}</span>
                        </div>
                      )}
                      
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                          <span>Protegiendo contra bots</span>
                        </div>
                        {hcaptchaToken && (
                          <div className="flex items-center gap-1 text-green-500 text-xs">
                            <CheckCircle className="h-3 w-3" />
                            <span>Verificado</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Esta verificación es proporcionada por hCaptcha para proteger contra spam y bots.
                    </p>
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover-glow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <CheckCircle className="h-4 w-4" />
                      ¡Mensaje enviado correctamente!
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      Error al enviar el mensaje
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

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

        </div>
      </div>
    </section>
  );
}
