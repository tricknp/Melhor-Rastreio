<template lang="pug">
    
    main.home
        div.home__container

            div.home__container__content
               
                h1.home__container__content--title O serviço de rastreio exclusivo do Melhor Envio
               
                p.home__container__content--description Um serviço de rastreio de encomendas totalmente gratuito
               
                router-link( :to="{name:'tracking'}" )
                    button.home__container__content--button 

            div.home__container__map
                img.home__container__map--img( src="../../assets/imgs/map-with-marker.svg" )
</template>

<script>
export default {
    
}
</script>