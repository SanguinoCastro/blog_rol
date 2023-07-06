# Blog de Juegos de Mesa

Este es un proyecto de un blog desarrollado con Next.js 13, Tailwind CSS, TypeScript y MDX. El objetivo de este proyecto es practicar el uso de estas tecnologías y crear una página estática desde el servidor utilizando la función `generateStaticParams` de Next.js.

## Funcionalidades

- Muestra diversas entradas relacionadas con juegos de mesa como D&D 5ed, Pathfinder y Vampiro: La Mascarada.
- Cada entrada contiene un título, descripción y fecha.
- Las entradas están escritas en formato MDX, lo que permite utilizar componentes React en el contenido.
- Utiliza Tailwind CSS para el diseño y la estilización de los componentes.
- El proyecto está desarrollado en TypeScript, lo que brinda una mayor seguridad y escalabilidad al código.

## Instrucciones de uso

1. Clona este repositorio: `git clone <URL_DEL_REPOSITORIO>`
2. Instala las dependencias: `npm install`
3. Ejecuta el proyecto en tu entorno de desarrollo: `npm run dev`
4. Navega a `http://localhost:3000` para ver el blog en funcionamiento.

## Estructura del proyecto

- `src/app/page/`: Contiene las páginas principales del blog, como la página de inicio y la página de cada entrada.
- `src/app/components/`: Aquí se encuentran los componentes reutilizables utilizados en el proyecto.
- `posts/`: Contiene los archivos de datos con las entradas del blog en formato MDX.
- `src/app/assets/`: Carpeta para los archivos estáticos, como imágenes.

## Contribuir

¡Las contribuciones son bienvenidas! Si tienes alguna idea para mejorar este proyecto, siéntete libre de hacer un fork del repositorio, implementar tus cambios y enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes encontrar más información en el archivo `LICENSE`.
