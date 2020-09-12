import Vue from 'vue'

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('test', cc =>
    console.log(cc)
  )
}
