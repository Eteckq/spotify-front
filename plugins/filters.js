import Vue from 'vue'

Vue.filter('slice', (value, args) => {
  if (!args) { args = 20 }

  if (value.length > args) {
    return value.slice(0, args) + '..'
  } else { return value }
})
