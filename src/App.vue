<template>
  <div>
    <Header></Header>
    <v-app id="app">
      <router-view/>
    </v-app>
  </div>
</template>
<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
  }
}
</script>
