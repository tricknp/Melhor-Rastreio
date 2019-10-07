<template lang="pug">
    
    section
        main-header
        home
        transporters-footer

</template>

<script>
import MainHeader from "@/components/FixedComponents/MainHeader";
import Home from '@/components/Home/Home'
import FooterWithTransporters from '@/components/FixedComponents/FooterWithTransporters'

export default {
  components: {
    'main-header': MainHeader,
    'home': Home,
    'transporters-footer': FooterWithTransporters
  }
}
</script>