"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Wrench, Rocket, Users, Network } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';


const skillCategories = {
  "Lenguajes": {
    skills: ["Java", "C#", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
    icon: Code,
    color: "from-blue-500 to-cyan-500"
  },
  "Frameworks y Librerías": {
    skills: ["Spring Boot", "React", "Next.js", "JPA/Hibernate", "Jakarta EE", "Bootstrap", "Tailwind CSS", "jQuery", "Backbone.js"],
    icon: Rocket,
    color: "from-purple-500 to-pink-500"
  },
  "Bases de Datos": {
    skills: ["MySQL", "Oracle", "DB2", "MongoDB", "PostgreSQL"],
    icon: Database,
    color: "from-green-500 to-emerald-500"
  },
  "Herramientas y DevOps": {
    skills: ["Docker", "Maven", "Git/GitHub", "Jenkins", "CI/CD", "JUnit", "Postman", "Swagger", "SonarQube", "WebLogic"],
    icon: Wrench,
    color: "from-orange-500 to-red-500"
  },
  "Servicios y APIs": {
    skills: ["REST API", "GraphQL", "Microservicios", "WebServices", "RESTful Services"],
    icon: Network,
    color: "from-indigo-500 to-blue-500"
  },
  "Metodologías": {
    skills: ["Agile", "Scrum", "DevOps", "Test-Driven Development", "Object-Oriented Programming"],
    icon: Users,
    color: "from-teal-500 to-green-500"
  },
};

export function SkillsSection() {
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
    <section ref={sectionRef} id="habilidades" className="py-16 md:py-24 bg-gradient-to-br from-card via-background to-card/50 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Code className="text-primary" size={24} />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Tecnologías</span>
            </div>
            <h2 className={`font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '0.1s'}}>
              <span className="text-gradient bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Mi Stack Tecnológico
              </span>
            </h2>
            <p className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '0.2s'}}>
              Herramientas y tecnologías que domino para crear soluciones robustas y escalables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Object.entries(skillCategories).map(([category, data], index) => (
              <Card 
                key={category} 
                className={`flex flex-col bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{transitionDelay: `${0.3 + index * 0.1}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${data.color} text-white`}>
                      <data.icon size={20} />
                    </div>
                    <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors">
                      {category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className={`text-sm cursor-default hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{transitionDelay: `${0.5 + index * 0.1 + skillIndex * 0.05}s`}}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            ))}
          </div>

          {/* Estadísticas adicionales - Actualizadas */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.8s'}}>
            {[
              { label: "Años de Experiencia", value: "7+", icon: Rocket },
              { label: "Proyectos Completados", value: "1+", icon: Code },
              { label: "Certificaciones", value: "1", icon: Database }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-6 bg-background/50 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <stat.icon className="text-primary" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
