<template lang="pug">
   
   footer.default-footer
        
        h1.default-footer--title transportadoras
        
        p.default-footer--text Uma frase grande para acompanhar essa seção

        div.default-footer__content    
            
            div.default-footer__content__item( v-for="(transporter, index) in transporters" )
                img.default-footer__content__item--icon( 
                    :src="require(`../../assets/imgs/transporters/${transporter.name}.svg`)" 
                    :alt="transporter.name" 
                )
            
</template>

<script>
export default {
  data() {
    return {
      transporters: [
        { name: "correios" },
        { name: "viabrasil" },
        { name: "jadlog" },
        { name: "latam" }
      ]
    };
  }
};
</script>