<template lang="pug">
    div.timeline
        
        div.timeline__item( v-for="(track, index) in staticTrackData" :key="index")
            

            div.timeline__item__content
                
                div.timeline__item__content--icon
                    img.icon( 
                      :class="toggleStatus(track)"
                      :src="require(`../../assets/imgs/status/${track.icon}.svg`)" 
                    )
                
                span.timeline__item__content--status( :class="toggleStatus(track)" ) {{ track.status }}    
                span.timeline__item__content--date(
                  v-show="currentStatus.includes(track.status)"
                ) {{ track.status === tracking.status ? 'atualmente' : '01/03/1998 13:30' }}

            div.timeline__item__progress( :class="toggleProgress(track)" )


</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  data() {
    return {
      staticTrackData: [
        { status: "coletado",          icon: "coletado", },
        { status: "postado",           icon: "postado",  },
        { status: "encaminhado",       icon: "encaminhado",  },
        { status: "saiu para entrega", icon: "saiu-para-entrega", },
        { status: "entregue",          icon: "entregue", last: true }
      ],
      currentStatus: []
    };
  },

  computed: {
    ...mapState("tracking", ["tracking"]),
  },

  mounted(){
    this.setTracking(),
    this.getTracking()
  },

  methods: {
    ...mapActions('tracking', ['setTracking']),

    toggleProgress(track){
      if (track.last) {
        return 'last'
      }

      if (this.currentStatus.includes(track.status) && this.tracking.status !== track.status) {
        return 'completed'
      }

      if (this.tracking.status === track.status) {
        return 'current'
      }

      if (!this.currentStatus.includes(track.status) && this.tracking.status !== track.status) {
        return 'pendent'
      }
    },

    toggleStatus(track){
      return this.currentStatus.includes(track.status) ? 'active' : 'pendent'
    },

    getTracking() {
      console.log('assssska')
      const statusCompleteds = this.tracking && this.tracking.events.map(el => el.status)
      this.currentStatus = statusCompleteds
    }
  }
};
</script>