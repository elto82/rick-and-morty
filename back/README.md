Rick and Morty App
Descripción
Esta es una aplicación que consta de un backend y un frontend para interactuar con una base de datos y mostrar información relacionada con los personajes de la serie "Rick and Morty".

El backend proporciona una API para acceder a los datos de los personajes, agregar personajes a la lista de favoritos y realizar otras operaciones relacionadas. Está construido con Node.js y utiliza una base de datos PostgreSQL.

El frontend está desarrollado con React y Redux, y se encarga de mostrar los personajes, permitir al usuario buscar y filtrar personajes, y manejar la lista de favoritos. Utiliza la API del backend para obtener los datos necesarios.

Instalación
Backend
Clona este repositorio en tu máquina local.

Asegúrate de tener instalado Node.js en tu sistema.

Ejecuta el siguiente comando para instalar las dependencias: npm install

Crea un archivo .env en el directorio raíz del proyecto.

Dentro de .env, define las siguientes variables de entorno: DB_USER=<usuario_de_la_base_de_datos> DB_PASSWORD=<contraseña_de_la_base_de_datos> DB_HOST=<host_de_la_base_de_datos> DB_NAME=<nombre_de_la_base_de_datos>

Reemplaza <usuario_de_la_base_de_datos>, <contraseña_de_la_base_de_datos>, <host_de_la_base_de_datos> y <nombre_de_la_base_de_datos> con los valores correspondientes de tu base de datos PostgreSQL.

Frontend
Clona el repositorio del proyecto frontend en tu máquina local.
Asegúrate de tener Node.js y npm instalados en tu sistema.
Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias: npm install
Uso
Backend
Ejecuta el siguiente comando para iniciar el servidor: npm start

El backend estará disponible en http://localhost:7000.

Frontend
Ejecuta el siguiente comando para iniciar el servidor de desarrollo: npm start

Accede a la aplicación en tu navegador a través de la siguiente URL: http://localhost:3000

Endpoints
A continuación se enumeran los endpoints disponibles en la API:

GET /rickandmorty/allCharacters: Obtiene todos los personajes de la serie "Rick and Morty".
GET /rickandmorty/character/:id: Obtiene un personaje por su ID.
GET /rickandmorty/detail/:detailId: Obtiene los detalles de un personaje por su ID.
GET /rickandmorty/fav: Obtiene los personajes favoritos.
POST /rickandmorty/fav: Agrega un personaje a la lista de favoritos.
DELETE /rickandmorty/fav/:id: Elimina un personaje de la lista de favoritos.
Contribuciones
Las contribuciones son bienvenidas. Si encuentras algún problema o tienes alguna mejora, no dudes en abrir un issue o enviar un pull request.

Licencia
Este proyecto está bajo la Licencia MIT.