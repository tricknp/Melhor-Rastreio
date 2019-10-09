<template lang="pug">
    
    footer.secondary-footer
        
        div.secondary-footer__left
            a.secondary-footer__left--item(
                v-for="(item, index) in externalLinks"
                :key="index"
                :href="item.link"
                target="_blank"
            ) {{ item.name }}

        div.secondary-footer__center
            span.secondary-footer__center--text Feito com &hearts; por
            img.secondary-footer__center--logo( src="../../assets/imgs/melhor-envio.png" )
        
        div.secondary-footer__right 
            span.secondary-footer__right--text Melhor Rastreio 2018
            span.secondary-footer__right--text Todos direitos reservados
            a.secondary-footer__right--link Termos de uso 

</template>

<script>
export default {
  data() {
    return {
      externalLinks: [
        { name: "melhor rastreio", link: "#" },
        { name: "página inicial", link: "#" },
        { name: "suporte", link: "#" }
      ],
    };
  }
};
</script>