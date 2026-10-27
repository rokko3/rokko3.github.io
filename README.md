# Sitio estático con Jekyll

Template base para una web estática publicada con GitHub Pages y Jekyll.

## Uso local

Necesitas Ruby y Bundler instalados.

```bash
bundle install
bundle exec jekyll serve --livereload
```

Abre <http://localhost:4000> en el navegador.

## Publicar en GitHub Pages

1. Sube estos archivos a un repositorio llamado `usuario.github.io`.
2. En **Settings > Pages**, selecciona **GitHub Actions** como fuente.
3. Cada push a `main` construirá y publicará el sitio automáticamente.

Edita `index.md`, `_config.yml` y `assets/css/style.scss` para personalizar el contenido, los metadatos y la apariencia.