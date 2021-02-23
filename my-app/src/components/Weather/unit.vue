<template>
  <div id="unit" v-on:click = "selectArea">
    <h1>{{areaName}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Unit',
  props: {
    areaName: {
      type: String,
      default: 'name'
    }
  },
  data () {
    return {
    }
  },
  beforeCreate: function () {
    // console.log('in area before created')
  },
  created: function () {
    // console.log('in area created', this.areaName)
  },
  mounted: function () {
    // console.log('in area mounted', this.areaName)
  },
  methods: {
    selectArea () {
      this.$router.push({path: `/weather/${this.areaName}`})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#unit {
  width: 100%;
}
</style>
