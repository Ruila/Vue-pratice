<template>
  <div id="areas-unit">
    <h1>A</h1>
  </div>
</template>

<script>
export default {
  name: 'Area',
  data () {
    return {
      msg: 'Welcome to Area'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#areas-unit {
  width: 250px;
  background-color: aquamarine;
  min-height: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: center;
}
</style>
