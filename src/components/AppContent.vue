<template>
  <v-content>
    <v-container fluid>
      <v-layout column>
        <v-list two-line>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ this.currentCity }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ new Date().toLocaleDateString() }}
                {{ new Date().toLocaleTimeString() }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-subheader>Hourly</v-subheader>
        <v-card>

          <v-card-title primary-title>
            <v-list>
              <v-list-tile v-for="(weather, index) in today" :key="index">
                <v-list-tile-avatar>
                  <img :src="avatar(weather.weather[0].icon)">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ new Date(weather.dt_txt).toLocaleTimeString() }}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{ weather.weather[0].description }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card-title>

        </v-card>
      </v-layout>
    </v-container>
  </v-content>
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
  methods: {
    avatar(icon) {
      return `http://openweathermap.org/img/w/${icon}.png`
    }
  },
  computed: {
    ...mapGetters('weather', [
      'cities',
      'weather',
      'today',
    ]),
  },
  created () {
    this.setCurrentCity(this.cities[0])

    this.getWeather()
  }
}
</script>
<style>
  a {
    text-decoration: none
  }
  main {
    height: 100vh !important
  }
</style>