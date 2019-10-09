<template lang="pug">
    
    div.tracking
      div.tracking__container
        div.tracking__container__content          
            
            h1.tracking__container__content--title Informações do Rastreio
            
            tracking-header
            
            timeline

            status-list

      secondary-footer
        
    
</template>

<script>                             
import TrackingHeader from '../components/FixedComponents/TrackingHeader'
import Timeline from '../components/Tracking/Timeline'
import StatusList from '../components/Tracking/StatusList'
import SecondaryFooter from '../components/FixedComponents/SecondaryFooter'

export default {
    components: {
        'tracking-header': TrackingHeader,
        'timeline': Timeline,
        'status-list': StatusList,
        'secondary-footer': SecondaryFooter
    },
    
}
</script>