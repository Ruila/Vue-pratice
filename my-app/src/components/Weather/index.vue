<template>
  <div class="weather">
    <h1>{{ msg }}</h1>
    <div class="areas">
      <Area />
    </div>
  </div>
</template>

<script>
import Area from './area'
export default {
  name: 'weather',
  components: {
    Area
  },
  data () {
    return {
      msg: 'Welcome to Weather'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather .areas {
  width: 900px;
  display: flex;
  flex-wrap: wrap;
}
</style>
