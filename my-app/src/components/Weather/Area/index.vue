<template>
  <div id="area">
    <div class="container">
      <div class="sun">
        <div class="container-sun">
          <svg class="svg-sun" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">
          <circle cx="50" cy="50" r="35" id="sun"></circle>
          </svg>
        </div>
      </div>
      <div class="rain">
        <div class="wrapper">
          <div class="cloud">
            <div class="cloud_left"></div>
            <div class="cloud_right"></div>
          </div>
          <div class="rain">
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
          </div>
          <div class="surface">
            <div class="hit"></div>
            <div class="hit"></div>
            <div class="hit"></div>
            <div class="hit"></div>
            <div class="hit"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/sun.css'
import '@/assets/css/rain.css'
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
#area .container {
  position: relative;
  margin: auto;
  display: flex;
  max-width: 1200px;
}

#area .container .sun {
  flex: 1;
}

#area .container .rain {
  flex: 1;
}
</style>
