import axios from 'axios'

export const state = () => {

}

export const getters = {}

export const actions = {
  login ({ commit, state }, data) {
    axios.get('')
  }
}

export const mutations = {
  CLEAR_COMPANIES (state) {
    state.values.companies = []
  }
}
