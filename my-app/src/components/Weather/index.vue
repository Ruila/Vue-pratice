<template>
  <div id="weather">
    <h1>{{ msg }}</h1>
    <div class="areas">
      <div v-for = "(item, key, index) in status.data" :key = index class="areas-unit">
        <Area :areaName = item.locationName />
      </div>

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
  data () {
    return {
      msg: 'Welcome to Weather',
      status: {
        data: []
      }
    }
  },
  mounted: function () {
    this.axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-077?Authorization=CWB-66C1A43E-5E26-4909-8121-A12C192396ED').then((response) => {
      console.log(response.data.records.locations[0].location)
      this.$set(this.status, 'data', response.data.records.locations[0].location)
      console.log(this.status.data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#weather {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

#weather .areas {
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#weather .areas .areas-unit {
  width: 250px;
  background-color: aquamarine;
  min-height: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: center;
}
</style>
