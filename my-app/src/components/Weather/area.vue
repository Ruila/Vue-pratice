<template>
  <div id="area">
    <h1>{{areaName}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Area',
  props: {
    areaName: {
      type: String,
      default: 'name'
    }
  },
  data () {
    return {
      msg: 'Welcome to Area'
    }
  },
  mounted: function () {
    console.log('in area', this.areaName)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
