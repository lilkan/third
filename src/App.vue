<template lang="pug">
  #app
    .header
      app-header
    .tabs 
      app-tabs 
    .content
      app-about
      
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
    appHeader: require('./components/header'),
    appTabs: require('./components/tabs'),
    appAbout: require('./components/about'),
  }
}
</script>

<style lang="scss">

</style>
 