<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 16
      h1 Slider Secuencial (Contador)



    
    #t_16_1.titulo-segundo.color-acento-contenido
      h2 16.1 Slider Secuencial (SlyderB): Bloque horizontal (Imagen y Texto)

    p Este tipo de slider permite presentar información de manera secuencial mediante diapositivas compuestas por un título, un texto descriptivo y una imagen de apoyo. Es ideal para destacar conceptos, recomendaciones, reflexiones o mensajes clave de forma visual y dinámica. La navegación se realiza mediante controles que permiten avanzar o retroceder entre las diapositivas. Se recomienda utilizar textos breves y un máximo de 10 diapositivas.
    .bg--gradientBlue.p-5.mb-5
      SlyderB(:datos="slyderBData")
    .row.justify-content-center.mb-5.me-3
      .col-auto
        a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t16/SlyderB.txt')" target="_blank" type="application/pdf")
          span Ver código fuente

    .row.mb-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.clr--gris.p-4(titulo="Requerimientos de información")
            ul.lista-ul.mb-4
              li
                i.fas.fa-angle-right.txt--green
                | Titulo corto e ilustrativo (cuando aplica).
              li
                i.fas.fa-angle-right.txt--green
                | Cada diapositiva debe ir acompañada de un texto corto de máximo 40 palabras que acompañe a una  foto o ilustración.

  

    Separador
    #t_16_2.titulo-segundo.color-acento-contenido
      h2 16.2  Secuencial (SlyderC): Bloque vertical (Imagen, Texto)
    p.mb-4 Tipo de slider secuencial, presenta la información de manera vertical, con un texto descriptivo y una imagen de apoyo. Se recomienda utilizar textos breves y un máximo de 10 diapositivas.
    .bg--gradientBlue.p-5.mb-5
      SlyderC(
        :datos="slyderCData"
      )

    .row.justify-content-center.mb-5.me-3
      .col-auto
        a.boton.color-botones.texto-blanco(:href="obtenerLink('/downloads/t16/SlyderC.txt')" target="_blank" type="application/pdf")
          span Ver código fuente

    Separador
    #t_16_3.titulo-segundo.color-acento-contenido
      h2 16.3 Slider Secuencial (SlyderE): Bloque horizontal (Texto, Imgen)

    p Este tipo de slider permite presentar información de manera secuencial mediante diapositivas compuestas por un título, un texto descriptivo y una imagen de apoyo. Es ideal para destacar conceptos, recomendaciones, reflexiones o mensajes clave de forma visual y dinámica. La navegación se realiza mediante controles que permiten avanzar o retroceder entre las diapositivas. Se recomienda utilizar textos breves y un máximo de 10 diapositivas.
    
    .bg--gradientBlue.p-5.mb-5
      SlyderE(indicadores="centro")
        div
          .row.align-items-center
            .col-md-6
              h4 SlyderE 1
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
        div
          .row.align-items-center
            .col-md-6
              h4 SlyderE 2
              p Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
        div
          .row.align-items-center
            .col-md-6
              h4 SlyderE 3
              p Duis aute irure dolor in reprehenderit in voluptate velit.
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema16',
  data: () => ({
    slyderBData: [
      {
        imagen: '@/assets/template/img-placeholder.svg',
        leyendaImagen: 'Leyenda imagen 1',
        titulo: 'Título SlyderB 1',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel porta justo. Praesent congue nibh a justo ornare.',
      },
      {
        imagen: '@/assets/template/img-placeholder.svg',
        leyendaImagen: 'Leyenda imagen 2',
        titulo: 'Título SlyderB 2',
        texto:
          'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      },
      {
        imagen: '@/assets/template/img-placeholder.svg',
        leyendaImagen: 'Leyenda imagen 3',
        titulo: 'Título SlyderB 3',
        texto:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
    slyderCData: [
      {
        imagen: '@/assets/template/img-placeholder.svg',
        leyendaImagen: 'Leyenda imagen 1',
        titulo: 'Título SlyderC 1',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel porta justo. Praesent congue nibh a justo ornare, eget vulputate nisl eleifend.',
      },
      {
        imagen: '@/assets/template/img-placeholder.svg',
        leyendaImagen: 'Leyenda imagen 2',
        titulo: 'Título SlyderC 2',
        texto:
          'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      {
        imagen: '@/assets/template/img-placeholder.svg',
        leyendaImagen: 'Leyenda imagen 3',
        titulo: 'Título SlyderC 3',
        texto:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
