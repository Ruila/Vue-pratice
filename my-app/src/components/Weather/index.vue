<template>
  <div id="weather">
    <h1>天氣預報</h1>
    <div class="areas">
      <div v-for = "(item, key, index) in status.data" :key = index class="areas-unit">
        <Unit :areaName = item.locationName />
      </div>

    </div>
  </div>
</template>

<script>
import Unit from './unit'
import {key} from '@/key/weather'
export default {
  name: 'Weather',
  components: {
    Unit
  },
  data () {
    return {
      status: {
        data: []
      }
    }
  },
  mounted () {
    console.log('in index')
    this.axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-077?Authorization=${key}`).then((response) => {
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
  position: relative;
  width: 250px;
  background-color: #ffffff;
  min-height: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: center;
  cursor: pointer;
}

#weather .areas .areas-unit:hover {
    /* background-color: #5a5a5a; */
    animation-name: animation;
    animation-duration: .1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

@keyframes animation {
    from {
        top: 0px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    to {
        top: -3px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
}
</style>
