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
  beforeCreate () {
    // console.log('<unit> beforeCreated')
  },
  created () {
    // console.log('<unit> created', this.areaName)
  },
  beforeMount () {
    // console.log('<unit> beforeMount', this.areaName)
  },
  mounted () {
    // console.log('<unit> mounted', this.areaName)
  },
  beforeUpdated () {
    // console.log('<unit> beforeUpdated')
  },
  updated () {
    console.log('<unit> updated')
  },
  watch: {
    areaName (val) {
      console.log('<unit> watch', val)
    }
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
