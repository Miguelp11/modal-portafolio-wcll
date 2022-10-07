# \<modal-portfolio-wcll>\</modal-portfolio-wcll>

WebComponent basado en LitElement para implementar una ventana modal desarrollada con el proposito de mostrar información acerca de tus proyectos, que puedes integrar en tu portafolio personal. 

# Uso

Instalar desde npm:

```
npm i @webc-lit/modal-portfolio-wcll
```

Coloque el script en su página HTML o incluya el archivo modal-portfolio-wcll.js en su paquete JS. Después de eso, puede usar la etiqueta modal-portfolio-wcll, así:

```
  <modal-portfolio-wcll class="modal-default" titleDetail="Descripción del proyecto">
    <div>
      <p>Descripción o información que desee mostrar</p>
    </div>
  </modal-portfolio-wcll>
```

Lo que se coloque dentro de la etiqueta ```<modal-portfolio-wcll><modal-portfolio-wcll>``` se renderizara dentro de la seccion _details_, este titulo puede ser cambiado desde la propiedad _titleDetail_. Este contenido puede ser estilado al gusto de cada quien, la recomendación es encerrar este contenido dentro de un ```<div></div>``` como se muestra en el ejemplo de arriba.

Para correr la app ejecutar:

```
npm run app
```

La ruta por defecto:

```
http://127.0.0.1:8081/
```

La ruta del demo por defecto:

```
http://127.0.0.1:8081/demo/
```

Para mas ejemplos revisar el demo.

## Metodos

- **openModal()**: Abre el modal.
- **closeModal()**: Cierra el modal y controla el tiempo de animación de cierre.

Ejemplos de uso: 

```
document.getElementById("myModal").openModal();
```
```
const modal = document.getElementById("myModal");
modal.openModal();
```

## Propiedades

Propiedad            | Tipo    | Descripción | Valor | Defecto
---------------------|---------|-------------|-------|---------
```title```          | String  | Titulo superior del modal | "" | "Titulo del modal"
```titleDetail```    | String  | Titulo sección detalles | "" | "Detalles del proyecto"
```titleInfo```      | String  | Titulo sección información | "" | ""
```isOpen```         | Boolean | Abrir / cerrar el modal| true/false | false
```details```        | Object  | Listar información del proyecto | { prop : valor} | {}
```url-image```      | String  | Ruta de la imagen a mostrar | "" | ""
```reverseDetails``` | Boolean | Intercambiar la posición de secciones | true/false | false
```size```           | String  | Ajustar el tamaño de la imagen | "original/complete/compress" | "complete"
```timeAnimation```  | Number  | Ajustar el tiempo de cierre | Enteros multiplos de 100 | 500

Para la propiedad ```details``` si agregas una prop del objeto con el nombre _Link_ este renderizará una etiqueta ```<a target="_blank"></a>``` por lo que el valor sera la ___url___ el sitio al cual sera redirigido. (Consulta el demo para ejemplo practico).

Para la propiedad ``` timeAnimation``` cada 100 representa .1 segundos, lo recomendando es ajustar una suma de 200 al tiempo que se le designe a la variable css ```--animation-duration```. Por ejemplo el valor por defecto de ```--animation-duration``` es de .3 por lo que la propiedad  ```timeAnimation``` su valor es de 500.

## Estilos personalizados 

Variable css                           | Descripción | Defecto
---------------------------------------|-------------|---------
```--animation-duration```             | Duración de la animación del modal | .3s
```--background-color-modal-content``` | Color de fondo del modal | #fff
```--background-color-opacity-modal``` | Color del overlay (usar transparencia) | rgba(0,0,0,0.7)
```--color-border-title```             | Color del borde inferior del titulo | #d1d1d1
```--color-separation-info-title```    | Color de la linea divisora de las secciones | #0563BB
```--color-text-visit-detail```        | Color del texto de la propiedad Link | #0563BB
```--color-text-modal```               | Color del texto del modal | #000