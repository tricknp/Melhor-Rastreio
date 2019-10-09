<template lang="pug">
    
    div.list
        
        div.list__header
            span.list__header--status Status
            span.list__header--locale Movimentação

        div.list__item
            div.list__item__status
                img.icon(src="../../assets/imgs/status/postado.svg")
                div.list__item__status__content
                    span.list__item__status__content--title Objeto encaminhado
                    span.list__item__status__content--date 23/09/2019 11:50

            div.list__item__locale
                span.list__item__locale--text em CTCE PORTO ALEGRE - POA/RS

        
        div.list__item
            div.list__item__status
                img.icon(src="../../assets/imgs/status/postado.svg")
                div.list__item__status__content
                    span.list__item__status__content--title Objeto encaminhado
                    span.list__item__status__content--date 23/09/2019 11:50

            div.list__item__locale
                span.list__item__locale--text em CTCE PORTO ALEGRE - POA/RS
        

        div.list__item
            div.list__item__status
                img.icon(src="../../assets/imgs/status/postado.svg")
                div.list__item__status__content
                    span.list__item__status__content--title Objeto encaminhado
                    span.list__item__status__content--date 23/09/2019 11:50

            div.list__item__locale
                span.list__item__locale--text em CTCE PORTO ALEGRE - POA/RS
    
    

                
</template>

<script>
import {  mapState } from 'vuex'

export default {
  created() {
    console.log('tem tracking?', this.tracking)
  },

  computed: {
    ...mapState("tracking", ["tracking"])
  },

  methods: {
    
  }
};
</script>