# PildorasHtml5
[Curso de Html 5](https://www.youtube.com/watch?v=QC9_8nRNNHA&list=PLU8oAlHdN5BnX63lyAeV0LzLnpGudgRrK) de Píldoras Informáticas


[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/QC9_8nRNNHA/0.jpg)](http://www.youtube.com/watch?v=QC9_8nRNNHA&list=PLU8oAlHdN5BnX63lyAeV0LzLnpGudgRrK)

# Configurar VSCode para el control de versiones Git/GitHub

* Descargar Git desde su [página web](https://git-scm.com/) e instalar
* Si es la primera vez que usas Git te va a pedir que hagas un registro, en una terminal debes escribir estos comandos:
 ```
 git config --global user.email "you@example.com"
 git config --global user.name "Your Name"
```
* En VSCode presionar Ctrl+Shift+P luego buscar Git:Clone e insertar link de GitHub
* En la primera vez te pedirá el usuario y contraseña de GitHub.
* Ver este [vídeo tutorial](https://www.youtube.com/watch?v=9eaR6MZvAnA) y para profundizar ver este otro [tutorial](https://www.youtube.com/watch?v=hWglK8nWh60).

# Temario
## ¿Qué es HTML5?
* HTML5 como estándar que une varias tecnologías.
## Componentes básicos de documentos HTML5
## Estructura de documento HTML
* Estiquetas básicas de estructura.
* Estructura de cabecera.
* Estructura de cuerpo.
## Nuevos y viejos elementos
## CSS y HTML
### Tipos de estilos y estructura.
* Componentes principales de CSS.
* Tipos de selectores.
### Aplicar CSS a documento HTML
### CSS3
* Las nuevas reglas.
* Transformaciones.
* Transiciones.
## JavaScript y HTML
* Qué es JavaScript y su importancia en la web.
* Sintaxis.
* Selectores.
* Eventos.
* APIs.
* Librerias externas.
## Audio y Vídeo
### Vídeo en HTML 5
* Programación de reproductor.
* Formatos.
* Atributos.
### Audio en HTML 5
* Programando reproductor.
* Atributos.
## Formularios y su API
### Formularios web
* Elementos.
* Tipos de datos.
* Atributos.
* Nuevos elementos de formulario.
## API Canvas
### El lienzo
* Dibujos básicos.
* Imagenes en el lienzo.
* Animaciones en el lienzo.
* Vídeo en el lienzo.
## API Drag and Drop (Arrastrar y Soltar)
* Eventos nuevos.
* Métodos.
* Propiedades.
## Geolocalización
* Métodos para detectar localización de visitantes.
* Trabajo con Google Maps.
* Métodos y Objetos.
## Almacenamiento web (Web Storage)
* Crear, leer y eliminar datos.
* Tipos de almacenamietos.
* Métodos.
* Propiedades.
## API Bases de Datos (IndexDB)
* BBDD, índices y transacciones.
* Abrir BBDD, agregar y eliminar objetos.
* Busqueda de datos.
## API manejo de archivos (API file)
### Sistema de archivos
### Propiedades de archivos
### El disco duro
* Creación de archivos.
* Eliminación de archivos.
* Copiar, Cortar y Pegar.
## API Comunication
* Ajax.
* Cross document.
* Web sockets.
## API Web Worker
* Los trabajadores web
* Detección de errores
## API History (Historial)
* Nuevos métodos de navegación en la web.
* Urls erróneas o falsas.
## API Offlines
* Trabajo con la caché.
* Manifiesto.
* Categorías.
* Comentarios.

# Desarrollo del Curso 
## Vídeo 1 Presentación.
## Vídeo 2 Conceptos Básicos.
* Creación archivo primera_web.html
## Vídeo 3
* Etiquetas title, link y estructura del cuerpo
* Seguimos trabajando con el archivo primera_web.html
### Organización del body
#### Cabecera
```
<heather> </heather>
```
#### Barra de navegación
```
<nav> </nav>
```
#### Barra Lateral
```
<aside> </aside>
```
#### Conenido Principal
```
<section> </section>
```
#### Información Institucional
```
<footer> </footer>
```
#### Modelo caja contenedor (Tipo tabla)
```
<div> </div>
```
## Vídeo 4
* Estructura del cuerpo.
* Nuevos Elementos Organizativos.
* Padres hijos y hermanos.
```
<section>
    <article>
        <h1></h1>
        <p></p>
        <footer></footer>
    </article>
</section>

```
* En Firefox y Chrome se debe hacer solo 1 h1
* Seguimos trabajando con el archivo primera_web.html
## Vídeo 5
### Etiquetas figure y figcaption,Nuevas y viejas etiquetas
* figure inserta imagen
* figcaption comentario de la imagen.
* Nuevas y viejas etiquetas.


| Etiqueta | Uso Semántico en HTML5 |
| --- | --- |
| `<mark></mark>` | **Marcar un texto**, sin importancia ni énfasis. (De acuerdo a las circunstancias del momento) |
| `<em></em>` | Para indicar **énfasis** en cursiva. Sustituye a la etiqueta `<i></i>`|
| `<strong></strong>` | Marcar texto importante en negrita|
|`<b></b>`| En desuso |
|`<small></small>`| Presentar textos legales |
| `<cite></cite>`| Títulos de libros, canciones, películas, trabajos propios |
| `<address></address>`| Para información de contacto. Debe ir dentro del **footer** |
|`<time></time>`| Representa fecha y hora`<time datetime="2014-09-11">`|
* Seguimos trabajando con el archivo primera_web.html.
## Video 6
### Evolución
<ol>
 <li>HTML con atributos de etiquetas</li>
 <li> Separación de estructura y apariencia
  <ul>
   <li>Estructura= HTML Apariencia=CSS</li>
  </ul>
 </li>
 <li>Estructura=HTML5 Apariencia=CSS3</li>
</ol>
