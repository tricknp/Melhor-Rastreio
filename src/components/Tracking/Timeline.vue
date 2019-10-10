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
                ) {{ trackDate(track, index) }}

            div.timeline__item__progress( :class="toggleProgress(track)" )

</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { dateTimeFormater } from "../../services/dates";

export default {
  data() {
    return {
      staticTrackData: [
        { status: "coletado", icon: "coletado" },
        { status: "postado", icon: "postado" },
        { status: "encaminhado", icon: "encaminhado" },
        { status: "saiu para entrega", icon: "saiu-para-entrega" },
        { status: "entregue", icon: "entregue", last: true }
      ],
      currentStatus: []
    };
  },

  computed: {
    ...mapState("tracking", ["tracking"]),
    ...mapGetters("tracking", ["getTrackingStatus"]),
  },

  mounted() {
    this.setTracking(),
    this.getTrackingStatus.then(res => this.currentStatus = res)
  },

  methods: {
    ...mapActions("tracking", ["setTracking"]),

    /*
     *  @param {Object} track -  retornará todos objetos que o for percorrer
     *
     *  Esse é o metodo que irá verificar o andamento da progress bar
     *  Nele é feito uma série de validações para retornar o devido status
     *
     *  Se o track conter o atributo "last", será atribuida a classe 'last', que basicamente irá dar disable nele no css
     *
     *  Se os status de rastreiamento contem os status do track e se os status não forem iguais irá retornar uma string 'completed',
     *  que basicamente será um status que já está concluido
     *
     *  Se o status do track for igual ao status do rastreamento retornará uma string 'current', que basicamente
     *  vai ser a classe atribuida com o gradient de progress no css
     *
     *  Se os status de rastreiamento NÃO contem os status do track e se os status não forem iguais irá retornar uma string 'pendent', que
     *  será a classe atribuida no css para "rastreamento pendente"
     */
    toggleProgress(track) {
      if (track.last) {
        return "last";
      }

      if (
        this.currentStatus.includes(track.status) &&
        this.tracking.status !== track.status
      ) {
        return "completed";
      }

      if (this.tracking.status === track.status) {
        return "current";
      }

      if (
        !this.currentStatus.includes(track.status) &&
        this.tracking.status !== track.status
      ) {
        return "pendent";
      }
    },

    /*
     *  @param {Object} track -  retornará todos objetos que o for percorrer
     *
     *  Verifica se os status de rastreiamento contem os status do track, caso tenha
     *  ele retornará uma string 'Active", que basicamente irá ativar a classe que atribui a cor de ativo.
     *  Caso não contenha, ele irá retornar a string 'Pendent', que irá ativar a classe e atribuir uma cor de inativo.
     */
    toggleStatus(track) {
      return this.currentStatus.includes(track.status) ? "active" : "pendent";
    },

    /*
     *  @param {Object} track -  retornará todos objetos que o for percorrer
     *  @param {Number} index - indice de cada objeto que o for percorrer
     *
     *  A função irá verificar se o status do rastreio é diferente do status do meu rastreio atual
     *  Caso seja igual, retornará uma string chamada 'Atualmente'
     *  Caso não seja igual, irá verificar se existe esse objeto de acordo com sua posição, se existir
     *  ele irá retornar a data desse evento
     *
     *  O metodo "dateTimeFormater" é só um utility que formata a data
     */
     trackDate(track, index) {
      const dateHistory = track.status !== this.tracking.status
          ? this.tracking.events[index] &&
            dateTimeFormater(this.tracking.events[index].created_at)
          : "atualmente";

      return dateHistory;
    }
  }
};
</script>