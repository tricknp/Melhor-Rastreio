<template lang="pug">
    
    section
        main-header
        home

</template>

<script>
import MainHeader from "@/components/FixedComponents/MainHeader";
import Home from '@/components/Home/Home'

export default {
  components: {
    'main-header': MainHeader,
    'home': Home
  }
}
</script>