<template lang="pug">
  
   header.head
        img.head--logo( src="../../assets/imgs/white-logo.svg" )
        
        div.head__menu( @click="toggleMenu" ref="hamburger" )
            div.head__menu--bar

        nav.head__menu__items( ref="menuItems" )
            div.head__menu__items--item( v-for="(item, index) in navigationItems") {{ item.name }}

</template>

<script>
export default {
  data() {
    return {
      navigationItems: [
        { name: "Melhor Envio" },
        { name: "Login" },
        { name: "Cadastre-se" }
      ],
      hamburgerActive: false,
    }
  },

  methods: {
    toggleMenu() {
      this.$refs.hamburger.classList.toggle("active")
      this.$refs.menuItems.classList.toggle("visible")
    }
  }
};
</script>