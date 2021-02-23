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
  name: 'Weather',
  components: {
    Area
  },
  mounted: function () {
    console.log('hi in weahter')
    this.axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-077?Authorization=CWB-66C1A43E-5E26-4909-8121-A12C192396ED')
    .then((response) => {
      console.log(response.data)
    })
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
