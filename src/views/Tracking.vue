<template lang="pug">
    section 
        h2(v-show="!tracking.status") loading
        h1 {{ tracking.status }}
    
</template>

<script>                                                                
import { mapActions, mapState } from 'vuex'

export default {
    mounted(){
        this.setTracking()     
    },

    computed: {
        ...mapState('tracking', ['tracking'])
    },

    methods: {
        ...mapActions('tracking', ['setTracking'])
    }
}
</script>