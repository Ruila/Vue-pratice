<template>
  <div id="weather">
    <h1>天氣預報</h1>
    <div class="search-group">
      <input  v-model="status.area" />
      <span @click = "getData">搜尋</span>
    </div>
    <div class="areas">
      <div v-for = "(item, key, index) in status.data" :key = index class="areas-unit">
        <Unit :areaName = item.locationName />
      </div>
      <!-- <div class="areas-unit">
        <Unit :areaName = this.status.data[0].locationName />
      </div> -->
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
        data: [],
        inputValue: 'aa',
        area: '臺南市',
        areaDict: {
          '宜蘭縣': 'F-D0047-001',
          '桃園市': 'F-D0047-005',
          '新竹縣': 'F-D0047-009',
          '苗栗縣': 'F-D0047-013',
          '彰化縣': 'F-D0047-017',
          '南投縣': 'F-D0047-021',
          '雲林縣': 'F-D0047-025',
          '嘉義縣': 'F-D0047-029',
          '屏東縣': 'F-D0047-033',
          '臺東縣': 'F-D0047-037',
          '花蓮縣': 'F-D0047-041',
          '澎湖縣': 'F-D0047-045',
          '基隆縣': 'F-D0047-049',
          '新竹市': 'F-D0047-053',
          '嘉義市': 'F-D0047-057',
          '臺北市': 'F-D0047-061',
          '高雄市': 'F-D0047-065',
          '新北市': 'F-D0047-069',
          '臺中市': 'F-D0047-073',
          '臺南市': 'F-D0047-077',
          '連江市': 'F-D0047-081',
          '金門市': 'F-D0047-085',
          '臺灣': 'F-D0047-089'
        }
      }
    }
  },
  beforeCreate () {
    // console.log('<index> beforeCreate')
  },
  created () {
    // console.log('<index> created', this.$el)
  },
  beforeMount () {
    // console.log('<index> beforeMounted', this.$el)
  },
  mounted () {
    console.log('this area', this.status.area)
    this.getData(this.status.area)
    // let array = [{locationName: 'Test'}]
    // this.$set(this.status, 'data', array)
    // console.log('<index> mounted', this.$el)
  },
  updated () {
    console.log('<index> updated', this.status.data)
  },
  watch: {
    status (val) {
      console.log('<index> watch', val)
    }
  },
  methods: {
    getData () {
      this.axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${this.status.areaDict[this.status.area]}?Authorization=${key}`).then((response) => {
        this.$set(this.status, 'data', response.data.records.locations[0].location)
      })
    },
    search () {

    }
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

#weather .search-group {
  display: flex;
  margin: 15px 0;
}

#weather .search-group span {
  font-size: 12px;
  color: #ffffff;
  background-color: black;
  padding: 10px;
  cursor: pointer;
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
