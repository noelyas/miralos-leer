# Míralos Leer
## E-commerce de venta de libros especializado en autoras mujeres

### Descipción del sitio

Al ingresar a la página principal, se visualiza el listado completo de libros. Desde el menú de navegación se puede filtrar por categorías: ficción y no ficción. 
Al seleccionar un libro, se visualiza una breve sinopsis, además de los datos que se veían en el listado, y la posibilidad de seleccionar la cantidad de unidades y agregar al carrito de compras.

Desde el carrito se visualiza un resumen con el título, autora y precio de cada libro agregado. Además se visualiza la cantidad de cada uno, y el precio total de la orden. 
Desde el carrito pueden sumarse o restarse unidades, o eliminar todas las unidades de un libro en particular.

Al finalizar la compra, se deben ingresar los datos personales (nombre, apellido, teléfono, e-mail). Una vez creada la orden, se guardarán los datos en Firebase y se mostrará en pantalla el id de la orden generado automáticamente.

Todos los datos de los productos también provienen de Firebase.

### Dependencias y librerías utilizadas:

- Bootstrap v5.0.1 (para desarrollar un e-commerce responsivo de manera simple)
- Material Icons de Google Fonts (para evitar el uso de imágenes a la hora de utilizar íconos)
- Firebase (La tienda se nutre de datos provenientes de una base Firestore, donde también se almacenan las órdenes realizadas)
- SweetAlert2 v11.3.0 (Para incluir alertas amigables con el usuario y con un diseño uniforme en todos los navegadores)