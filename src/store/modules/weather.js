export default {
  namespaced: true,
  strict: true,
  state () {
    return {
      cities: [
        'Tokyo',
        'Yokohama',
        'Kyoto',
        'Osaka',
        'Sapporo',
        'Nagoya'
      ],
      countryCode: 'jp',
      currentCity: '',
      weather: {},
      today: [],
    }
  },
  mutations: {
    setCurrentCity(state, currentCity) {
      state.currentCity = currentCity
    },
    setWeather(state, weather) {
      state.weather = weather
    },
    setToday(state, weather) {
      state.today = weather.list.filter(item => {
        return new Date(item.dt_txt).toDateString() == new Date().toDateString()
      })
    },
  },
  getters: {
    cities: (state) => {
      return state.cities
    },
    countryCode: (state) => {
      return state.countryCode
    },
    currentCity: (state) => {
      return state.currentCity
    },
    weather: (state) => {
      return state.weather
    },
    today: (state) => {
      return state.today
    }
  }
}
