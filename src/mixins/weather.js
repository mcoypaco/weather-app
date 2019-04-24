import { mapMutations, mapGetters } from "vuex";
import axios from "axios";

export default {
  computed: {
  ...mapGetters('weather', [
    'countryCode',
    'currentCity',
  ])
  },
  methods: {
    ...mapMutations('weather', [
      'setCurrentCity',
      'setToday',
      'setWeather'
    ]),
    getWeather () {
      return axios.post(`${process.env.VUE_APP_API_URL}/api/weather/forcast5`, {
        city: this.currentCity,
        country_code: this.countryCode
      })
        .then(({ data }) => {
          this.setWeather(data)
          this.setToday(data)
        })
        .catch(({ response }) => {
          alert(response.message)
        })
    }
  },
}