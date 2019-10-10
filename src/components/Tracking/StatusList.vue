<template lang="pug">
    
    div.list
        
        div.list__header
            span.list__header--status Status
            span.list__header--locale Movimentação

        div.list__item( v-for="track in tracking.events" )
            div.list__item__status
                img.icon( 
                    :src="require(`../../assets/imgs/status/${track.status}.svg`)" 
                    :class="toggleStatus(track)"
                )
                div.list__item__status__content
                    span.list__item__status__content--title {{ statusText(track) }}
                    span.list__item__status__content--date {{ trackDate(track) }}

            div.list__item__locale
                span.list__item__locale--text {{ trackLocale(track) }}

        

                
</template>

<script>
import { mapState, mapActions } from "vuex";
import { dateTimeFormater } from "../../services/dates";

export default {
  computed: {
    ...mapState("tracking", ["tracking"])
  },

  mounted() {
    this.setTracking();
  },

  methods: {
    ...mapActions("tracking", ["setTracking"]),

    trackDate: track => dateTimeFormater(track.created_at),

    statusText(track) {
      return track.status === "coletado"
        ? "Coleta realizada"
        : `Objeto ${track.status}`;
    },

    toggleStatus(track) {
      let className = "";

      switch (track.status) {
        case "coletado":
          className = "black";
          break;

        case "postado":
          className = "orange";
          break;

        case "encaminhado":
          className = "blue";
          break;
      }

      return className;
    },

    trackLocale(track) {
      let prefix = "";

      switch (track.status) {
        case "coletado":
          prefix = "por";
          break;

        case "postado":
          prefix = "em";
          break;

        case "encaminhado":
          prefix = "para";
          break;
      }

      return `${prefix} ${track.location}`;
    }
  }
};
</script>