import { make } from 'vuex-pathify'

const state = {
  drawer: false,
  items: [
    {
      text: 'About',
      to: {
        name: 'About',
      },
    },
    {
      text: 'Locations',
      to: {
        name: 'Locations',
      },
    },
    {
      text: 'Contact',
      to: {
        name: 'Contact',
      },
    },
  ],
}

const mutations = make.mutations(state)

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
