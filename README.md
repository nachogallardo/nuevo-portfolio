# 🚀 Portfolio de Ignacio Gallardo Sánchez

Un portfolio moderno y elegante desarrollado con **Next.js 15**, **TypeScript** y **Tailwind CSS**, diseñado para mostrar las habilidades y proyectos de un desarrollador.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante con tema oscuro y efectos visuales
- 📱 **Responsive**: Completamente adaptable a todos los dispositivos
- ⚡ **Rendimiento Optimizado**: Construido con Next.js 15 y Turbopack
- 🎯 **SEO Optimizado**: Meta tags y estructura optimizada para motores de búsqueda
- 🎭 **Animaciones Suaves**: Transiciones y efectos visuales fluidos
- 🖱️ **Cursor Personalizado**: Cursor customizado para una experiencia única
- 🎨 **UI Components**: Sistema de componentes basado en Radix UI y shadcn/ui

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 15.3.3** - Framework React con App Router
- **React 18.3.1** - Biblioteca de interfaz de usuario
- **TypeScript 5** - Tipado estático
- **Tailwind CSS 3.4.1** - Framework de estilos utilitarios
- **Radix UI** - Componentes de interfaz accesibles
- **Lucide React** - Iconografía moderna

### Herramientas de Desarrollo
- **Turbopack** - Bundler ultra-rápido para desarrollo
- **PostCSS** - Procesador de CSS
- **ESLint** - Linter para JavaScript/TypeScript
- **Genkit** - Framework de IA para Google

### Características Técnicas
- **App Router** de Next.js 15
- **Server Components** y **Client Components**
- **Optimización de imágenes** con Next.js Image
- **Fonts optimizadas** con Google Fonts
- **Scroll suave** y navegación fluida

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/nachogallardo/portfolio.git
cd portfolio
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:9002
```

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx          # Página de inicio
│   │   ├── proyectos/        # Página de proyectos
│   │   └── globals.css       # Estilos globales
│   ├── components/            # Componentes reutilizables
│   │   ├── sections/         # Secciones de la página
│   │   │   ├── hero.tsx      # Sección principal
│   │   │   ├── about.tsx     # Sección sobre mí
│   │   │   ├── skills.tsx    # Sección de habilidades
│   │   │   ├── projects.tsx  # Sección de proyectos
│   │   │   └── contact.tsx   # Sección de contacto
│   │   ├── ui/               # Componentes de UI
│   │   ├── header.tsx        # Navegación
│   │   ├── footer.tsx        # Pie de página
│   │   └── cursor.tsx        # Cursor personalizado
│   ├── lib/                  # Utilidades y configuraciones
│   └── hooks/                # Hooks personalizados
├── public/                   # Archivos estáticos
├── docs/                     # Documentación
└── package.json             # Dependencias del proyecto
```

## 🎨 Secciones del Portfolio

### 🏠 Hero Section
- Presentación principal con animaciones
- Imagen de fondo optimizada
- Botones de navegación con efectos hover
- Indicador de scroll animado

### 👨‍💻 About Section
- Información personal y profesional
- Badge de certificación Oracle Java
- Características destacadas con iconos
- Animaciones de entrada con Intersection Observer

### 🛠️ Skills Section
- Habilidades técnicas organizadas por categorías
- Progreso visual de competencias
- Iconos representativos para cada tecnología
- Efectos de hover y transiciones

### 🚀 Projects Section
- Galería de proyectos destacados
- Cards interactivos con información detallada
- Enlaces a repositorios y demos
- Filtros por tecnología

### 📞 Contact Section
- **Formulario de contacto con Web3Forms**: Integración con API externa para envío de emails
- **Google reCAPTCHA v2**: Protección anti-spam profesional con verificación visual
- **Validación de formularios**: Campos requeridos y validación de email
- **Estados de envío**: Feedback visual para éxito/error del envío
- **Información de contacto**: Enlaces directos a email, LinkedIn y GitHub
- **Ubicación actualizada**: Sevilla, España

## 🎯 Scripts Disponibles

```bash
# Desarrollo con Turbopack
npm run dev

# Desarrollo con Genkit (IA)
npm run genkit:dev

# Watch mode para Genkit
npm run genkit:watch

# Construcción para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint

# Verificación de tipos
npm run typecheck
```

## ⚙️ Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Variables de entorno para el portfolio
# Cambia a false para ocultar la sección de proyectos
NEXT_PUBLIC_SHOW_PROJECTS=true

# Google reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

### Variables Disponibles:
- **`NEXT_PUBLIC_SHOW_PROJECTS`**: Controla si se muestra la sección de proyectos (`true`/`false`)
- **`NEXT_PUBLIC_RECAPTCHA_SITE_KEY`**: Clave pública de Google reCAPTCHA para el formulario de contacto

## 🔐 Configuración de Google reCAPTCHA

Para usar el formulario de contacto, necesitas configurar Google reCAPTCHA:

### 1. Crear cuenta en Google reCAPTCHA
1. Ve a [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Crear" para agregar un nuevo sitio

### 2. Configurar el sitio
- **Etiqueta**: Nombre descriptivo (ej: "Mi Portfolio")
- **Tipo de reCAPTCHA**: reCAPTCHA v2 → "No soy un robot"
- **Dominios**: 
  - Para desarrollo: `localhost`
  - Para producción: `tudominio.com`
- **Acepta** los términos de servicio

### 3. Obtener las claves
- **Clave del sitio**: Esta va en `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- **Clave secreta**: No se necesita para este proyecto (Web3Forms maneja la validación)

### 4. Configurar en el proyecto
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LcXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## 🎨 Personalización

### Colores y Tema
El proyecto utiliza un sistema de colores personalizado definido en `tailwind.config.ts`:

- **Primary**: Color principal de la marca
- **Accent**: Color de acento
- **Background**: Fondo principal
- **Foreground**: Texto principal
- **Card**: Fondo de tarjetas
- **Border**: Bordes y separadores

### Fuentes
- **Inter**: Fuente principal del cuerpo
- **Space Grotesk**: Fuente para títulos
- **JetBrains Mono**: Fuente monoespaciada para código

### Animaciones
- Transiciones suaves entre secciones
- Efectos de hover en componentes
- Animaciones de entrada con Intersection Observer
- Cursor personalizado con efectos

## 📱 Responsive Design

El portfolio está optimizado para:
- 📱 **Mobile**: 320px - 768px
- 📱 **Tablet**: 768px - 1024px
- 💻 **Desktop**: 1024px+
- 🖥️ **Large Desktop**: 1440px+

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Netlify
```bash
# Construir el proyecto
npm run build

# Subir la carpeta 'out' a Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Ignacio Gallardo Sánchez**
- 🌐 Portfolio: [ignaciogallardo.dev](https://ignaciogallardo.dev)
- 📧 Email: [tu-email@ejemplo.com]
- 💼 LinkedIn: [Tu LinkedIn]
- 🐙 GitHub: [@tu-usuario]

---

⭐ **¡No olvides darle una estrella al proyecto si te gusta!** ⭐