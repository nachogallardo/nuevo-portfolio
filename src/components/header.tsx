"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Menu, X, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/#habilidades", text: "Habilidades" },
    { href: "/#proyectos", text: "Proyectos" },
    { href: "/#contacto", text: "Contacto" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || isMenuOpen
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link 
          href="/" 
          className="font-headline text-lg font-bold transition-all duration-300 hover:text-primary group flex items-center gap-2"
        >
          <div className="p-1 rounded-md bg-gradient-to-r from-primary to-accent group-hover:scale-110 transition-transform duration-300">
            <Code className="h-4 w-4 text-white" />
          </div>
          <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
            Ignacio Gallardo
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="relative transition-all duration-300 hover:text-primary group"
            >
              <span className="relative z-10">{link.text}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/nachogallardo" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <Github className="h-5 w-5 transition-colors hover:text-primary" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link 
            href="https://www.linkedin.com/in/ignaciogallardosanchez/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="h-5 w-5 transition-colors hover:text-primary" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>
      </div>
      
      {/* Menú móvil mejorado */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 animate-slide-up">
          <nav className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
            {navLinks.map((link, index) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="transition-all duration-300 hover:text-primary hover:scale-105 py-2 px-4 rounded-lg hover:bg-primary/10" 
                onClick={handleLinkClick}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {link.text}
              </Link>
            ))}
            
            {/* Enlaces sociales en móvil */}
            <div className="flex gap-4 pt-4 border-t border-border/30">
              <Link 
                href="https://github.com/nachogallardo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/ignaciogallardosanchez/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
