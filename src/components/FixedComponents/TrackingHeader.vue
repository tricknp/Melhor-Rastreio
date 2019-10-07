<template lang="pug">
    
    header.tracking-head
        router-link( :to="{ name: 'home' }" )
            img.tracking-head--logo( src="../../assets/imgs/colorful-logo.svg" )

        div.tracking-head__info    
            
            span.tracking-head__info--transporter Correios
            
            span.tracking-head__info--code {{ !tracking.tracking ? 'Carregando...' : tracking.tracking }}
        
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState("tracking", ["tracking"])
  }
};
</script>