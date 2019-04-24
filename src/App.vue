<template>
  <v-app>
    <AppToolbar />
    <AppContent />
  </v-app>
</template>

<script>
import AppContent from './components/AppContent'
import AppToolbar from './components/AppToolbar'

export default {
  name: 'App',
  components: {
    AppContent,
    AppToolbar,
  },
  data () {
    return {
      //
    }
  }
}
</script>
