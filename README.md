# Portfolio personal

Portfolio web de Juan Carlos Torres, construido con Astro y publicado en GitHub Pages:

**https://juanc-torres.github.io**

## Stack

- Astro 5
- Preact
- Tailwind CSS 4
- Markdown para los proyectos
- Sitemap e iconos con integraciones de Astro

## Desarrollo local

Requisitos: Node.js y npm.

```bash
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

## Comandos

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza la build de producción |
| `npm run astro` | Ejecuta la CLI de Astro |

## Contenido

- `src/pages/index.astro`: página principal del portfolio.
- `src/pages/portfolio/projects/`: proyectos escritos en Markdown.
- `src/components/portfolio/`: secciones de experiencia, estudios, proyectos, herramientas y contacto.
- `src/components/layout/`: cabecera, navegación y pie de página.
- `src/components/ui/`: componentes reutilizables de interfaz.
- `public/images/`: imágenes estáticas de los proyectos.

Para añadir un proyecto, crea un archivo `.md` en `src/pages/portfolio/projects/` y añade sus imágenes en `public/images/` cuando sea necesario.

