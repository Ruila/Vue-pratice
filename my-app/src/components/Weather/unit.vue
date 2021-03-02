<template>
  <div id="unit" v-on:click = "selectArea">
    <h1>{{areaName}}</h1>
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Unit extends Vue {
  @Prop({ default: 'tainan', type: String }) areaName

  selectArea () {
    this.$router.push({path: `/weather/${this.areaName}`})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#unit {
  width: 100%;
}
</style>
