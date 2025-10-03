export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex h-14 items-center justify-center px-4 md:px-6 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Ignacio Gallardo Sánchez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
