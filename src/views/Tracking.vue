<template lang="pug">
    section 
        tracking-header
    
</template>

<script>                             


import { mapActions, mapState } from 'vuex'
import TrackingHeader from '../components/FixedComponents/TrackingHeader'

export default {
    components: {
        'tracking-header': TrackingHeader 
    },
    
    mounted(){
        this.setTracking() 
    },

    computed: {
        ...mapState('tracking', ['tracking']),
    },

    methods: {
        ...mapActions('tracking', ['setTracking']),
    }
}
</script>