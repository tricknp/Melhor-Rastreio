<template lang="pug">
    
    section
        main-header
        home
        main-footer

</template>

<script>
import MainHeader from "@/components/FixedComponents/MainHeader";
import Home from '@/components/Home/Home'
import MainFooter from '@/components/FixedComponents/MainFooter'

export default {
  components: {
    'main-header': MainHeader,
    'home': Home,
    'main-footer': MainFooter
  }
}
</script>