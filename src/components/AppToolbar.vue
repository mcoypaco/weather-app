<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>Weather</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          flat
          v-on="on"
        >
          Cities
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
          v-for="(city, index) in cities"
          :key="index"
          @click="load(city)"
        >
          <v-list-tile-title>{{ city }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
import { mapGetters } from 'vuex'
import Weather from '../mixins/weather'

export default {
  mixins: [ Weather ],
  data () {
    return {
      // 
    }
  },
  computed: {
    ...mapGetters('weather', ['cities'])
  },
  methods: {
    load(city) {
      this.setCurrentCity(city)

      this.getWeather()
    }
  }
}
</script>
